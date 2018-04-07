/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import UserInfoManager from '../../common/userInfoManager'
import Login from './login'

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


    // static navigationOptions = ({ navigation }) => ({
    //     tabBarOnPress:() => {
    //       // console.log("static func",this);
    //       navigation.navigate('Login')
    //     }
    // })
    constructor(props, context) {
        super(props, context);
        this.state = {
          user: null,
        }
    }
    render(){
      //
      if (!this.state.login) {
        return  <Login  handleLogin={this._handleLogin}/>
      }
      return(
        <View style={styles.container}>
          <Text>this is user </Text>
        </View>
      )
    }
    //
    componentWillMount(){

    }


  get(name:string){
    console.log(name,"this name is");
  }


  async componentDidMount(){
      // 1. 获取登录状态
      try {
          let useArray  = await UserInfoManager.loadUserInfo();
          console.log(useArray);
          if (useArray[0] && useArray[1]) {
            this.setState({user:useArray[0]})
          }else {

          }
      } catch (e) {
        console.log("componentdidMount user====",e);
      }

    }

    async _handleLogin(token,user){
      await   UserInfoManager.saveUserInfo(user,token)
    }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    flexDirection:'row'
  }

});
