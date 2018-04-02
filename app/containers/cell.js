/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import LikeView from './likeView'
import Comment from './comment'

import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
  Image
} from 'react-native';

var screenWidth = Dimensions.get('window').width


export default class Cell extends Component {
    constructor(props, context) {
        super(props, context);

    }
    render(){
      const {rowData} = this.props;
      const {_id} = rowData;
      return(
        <TouchableHighlight onPress={()=> this.props.pressComment()}>
          <View style = {styles.itemContainer}>
            <View>
              <Text>{rowData.title}</Text>
              <Image
                style={styles.thumb}
                source={{uri: rowData.thumb}}>
              </Image>
              <Icon
                style = {styles.play}
                name='ios-play-outline'
                size = {28}
              />
            </View>
            <View style={styles.itemFooter}>
              <LikeView rowData= {rowData}/>
              <Comment />
            </View>
          </View>
      </TouchableHighlight>
      )
    }

}


const styles = StyleSheet.create({

  itemContainer:{
    // backgroundColor:'red'
  },

  handleBox:{
    flex:1,
    justifyContent:'center',
    flexDirection:'row'
  },


  itemFooter:{
    backgroundColor:'white',
    flexDirection:'row'
  },

  footerText:{
    paddingLeft: 12,
    fontSize: 18,
    color: '#333'
  },

  thumb:{
    width:screenWidth,
    height:0.5 * screenWidth
  },

  play:{
    position: 'absolute',
    bottom: 14,
    right: 14,
    width:46,
    height:46,
    backgroundColor:'transparent',
    color:'red',
    borderWidth:2,
    borderRadius: 23,
    backgroundColor:'blue',
    paddingTop: 9,
    paddingLeft: 18,
  },
});
