/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.27

import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
  Image,
  AlertIOS,
  TouchableOpacity
} from 'react-native';

export default class Comment extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          isLike:false
        }
    }
    render(){
      const {isLike} = this.state;
      return(
          <TouchableOpacity style={styles.touch} onPress = {this._pressComment.bind(this)} >
              <View style={styles.container}>
                <Icon
                  name='ios-chatboxes-outline'
                  size = {25}
                />
                <Text style={styles.commentText}>
                  评论
                </Text>
              </View>
            </TouchableOpacity>
      )
    }

    _pressComment = () => {
      const {navigation} = this.props;
      navigation.navigate('Detail')

    }

}


const styles = StyleSheet.create({
  touch:{
    flex:1
  },

  container:{
    // backgroundColor:'gray',
    flex:1,
    justifyContent:'center',
    flexDirection:'row',
    alignItems:'center'
  },
  heartIcon: {
    // backgroundColor:'red'

  },

  commentText:{
    paddingLeft: 12,
    fontSize: 18,
    color: '#333',
    // backgroundColor:'blue'
  },


});
