/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
  Image,
  Button,
  FlatList
} from 'react-native';
import {getHomeList} from '../fetch/home/homeList'

import Cell from '../containers/cell'

export default class homeList extends Component {
    constructor(props, context) {
        super(props, context);
        this.state =  {
          isRefreshing: false,
          isLoadingTail: false,
          nextPage:0,
          items:[]
        }
    }

    render(){
      const {items} = this.state;
      return(
        <FlatList
          data={items}
          ListHeaderComponent = {this._header()}
          ListFooterComponent = {this._footer()}
          renderItem={({item}) => <Cell rowData = {item} pressComment = {this._pressComment.bind(this,item)}/>}
          refreshing = {this.state.isRefreshing}
          onRefresh = {this._refresh}
          onEndReached = {this._loadMore}
        />
      )
    }

    _pressComment = (item) => {
      const {navigation} = this.props;
      navigation.navigate('Detail',item)
    }


    componentDidMount(){
      this.fetch(0);
    }

    fetch(page) {
      var {
        isLoadingTail,
        isRefreshing
      } = this.state;
      if (isLoadingTail || isRefreshing) {
        return;
      }
      this._changeRefreshState(true, page)
      getHomeList(page).then(data => {
        this._changeRefreshState(false);
        if (!data || !data.success) {
          return;
        }
        var {
          items,
          nextPage
        } = this.state;
        const {
          dataMock
        } = data;
        if (page == 0) {
          items = dataMock;
        } else {
          items = items.concat(dataMock);
        }
        nextPage++;
        this.setState({
          nextPage: nextPage,
          items: items,
        })
        console.log(nextPage, 'currentState:', this.state);
      }).catch(ex => {
        console.error(ex.message,"error====");
      })
    }

    _changeRefreshState(isStart,page = 0){
      if (!isStart) {
        this.setState({
          isLoadingTail: false,
          isRefreshing:false
        })
        return;
      }

      if (page != 0) {
        this.setState({
        isLoadingTail: true,
        isRefreshing:false
      })
      } else {
        this.setState({
          isLoadingTail: false,
          isRefreshing:true
      })
      }
    }

    _refresh = () => {
      this.fetch(0);
    }

    _loadMore = () => {
      this.fetch(this.state.nextPage)

    }

    _header = () => {
       return <Text style={[styles.txt, { backgroundColor: 'gray' }]}>这是头部</Text>;
   }

   _footer = () => {
     return <Text style={[styles.txt, { backgroundColor: 'gray' }]}>这是尾部</Text>;
   }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    flexDirection:'row'
  }

});
