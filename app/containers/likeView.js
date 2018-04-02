/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {postLike}  from '../fetch/home/like'


import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
  Image,
  AlertIOS
} from 'react-native';
import {connect} from 'react-redux'

export default class LikeView extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          isLike:props.rowData.isLike
        }
    }
    render(){
      const {isLike} = this.state;
      return(
          <TouchableOpacity style = {styles.touch}  onPress= {this._pressLike.bind(this)}>
            <View style={styles.container}>

                <Icon style = {styles.heartIcon}
                  name= {isLike ? 'ios-heart' : 'ios-heart-outline'}
                  size = {25}
                />
                <Text style={styles.likeText}>
                  喜欢
                </Text>

            </View>
            </TouchableOpacity>
      )
    }

    _pressLike(){
      const {id} = this.props.rowData;
      const {isLike} = this.state;
      postLike(isLike).then(data => {
          if (data.success) {
            this.setState({isLike:!isLike});
          }
      })
    }
}



const styles = StyleSheet.create({

  touch:{
    flex:1,
    // backgroundColor:"red"
  },

  container:{

    justifyContent:'center',
    flexDirection:'row',
    alignItems:'center'
  },
  heartIcon: {
    // backgroundColor:'red'

  },

  likeText:{
    paddingLeft: 12,
    fontSize: 18,
    color: '#333',
    // backgroundColor:'blue'
  },


});
