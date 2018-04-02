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


export default class user extends Component {
  static navigationOptions = ({ navigation }) => ({
      tabBarOnPress:() => {
        // console.log("static func",this);
        navigation.navigate('Login')
      }
  })

    constructor(props, context) {
        super(props, context);
    }
    render(){
      return(
        <View style={styles.container}>
          <Text>this is user </Text>
        </View>



      )
    }
    //

    componentWillMount(){
      console.log("componentWillMount user====");

    }
    componentDidMount(){
      console.log("componentDidMount user====");

    }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    flexDirection:'row'
  }

});
