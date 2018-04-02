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
  AlertIOS
} from 'react-native';


export default class homeList extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render(){
      return(
        <View style={styles.container}>
          <Text>this is home </Text>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    flexDirection:'row'
  }

});
