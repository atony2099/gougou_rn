/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'
import {CountDownText} from '../../components/react-native-countdown'
import Popup from '../../common/popup'
import {getVerifyCode,verify}  from  '../../fetch/user/verify'
import * as Tips from '../../common/tips/verifyTips'
import {LoginError} from '../../common/Error/CustomError'

import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
  Button
} from 'react-native';
const {width} = Dimensions.get('window')

export default class login extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.placeHolder = '请输入手机号码',
    this.placeCode = '请输入验证码',
    this.getCodeStr = "获取验证码",
    this.loginStr = "登录"
    this.state = {
      phoneNumber: '',
      sentCode: false,
      code:'',
      pop:null
    }
  }
  render() {
    const {sentCode, buttonText,pop} = this.state;
    return (<View style={styles.container}>

      <TextInput style={styles.textInput} placeholder={this.placeHolder} onChangeText={(phoneNumber) => this.setState({phoneNumber})} value={this.state.phoneNumber}/>
      {
        sentCode == false
          ? null
          : <View style={styles.codeContainr}>
              <TextInput style={[styles.textInput, styles.codeInput]} placeholder={this.placeCode} onChangeText={(code) => this.setState({code})} value={this.state.code}/>
              <CountDownText style={styles.countDown} countType='seconds'
                // 计时类型：seconds / date
                auto={true}
                // 自动开始
                afterEnd={() => {}}
                // 结束回调
                timeLeft={20}
                // 正向计时 时间起点为0秒
                step={-1}
                // 计时步长，以秒为单位，正数则为正计时，负数为倒计时
                startText='获取验证码'
                // 开始的文本
                endText='获取验证码'
                // 结束的文本
                intervalText={(sec) => sec + '秒重新获取'}
                // 定时的文本回调
              />
            </View>

      }

      <TouchableOpacity style={styles.loginButton} onPress = {this.clickLogin.bind(this)} >
        <Text style={styles.text}>{!sentCode ? this.getCodeStr:this.loginStr}</Text>
      </TouchableOpacity>
      <Popup  tips = {pop} />
    </View>)
  }

  clickLogin(){
    // 1.验证手机号码
    const {phoneNumber,code} = this.state;
    // 2. checkPhone
    if (!phoneNumber) {
      let pop = Tips.errorPhoneAlert;
      this.updatePopValue(pop, 1500)
      return;
    }
    // 3. get code service
    if (this.state.sentCode == false) {
      this.setState({sentCode:true})
      getVerifyCode(phoneNumber).then((data)=> {
        console.log("=========",data);
      }).catch(error => {
        console.log("error====",error);
      })
      return;
    }

    //4.  verifycode
    if (this.state.sentCode == true) {
      if (!code) {
        let pop = Tips.emptyCodeAlert;
        this.updatePopValue(pop)
        return;

      }

      verify(phoneNumber,code).then((data)=> {
        const {success,err,user} = data;
        if(!success || !user){
            let error = new LoginError(err)
            throw(error)
        }
        console.log("code is :",data);
      }).catch(error=> {
        if (error instanceof LoginError) {
          this.updatePopValue({content:error.message})
        }else {
          this.updatePopValue(Tips.errorNetAlert)
        }
      })
    }
  }


  updatePopValue(pop,delayTime = 1500){
    this.setState({pop})
    setTimeout(()=>{
      this.setState({pop:null})
    },delayTime)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5
  },
  textInput: {
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 5
  },
  codeContainr: {
    // backgroundColor:'blue',
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  codeInput: {
    width: '70%'
    // width:'80%',
    // backgroundColor:'blue'
  },
  countDown: {
    width: '25%',
    height: 40,
    lineHeight: 40,
    // padding: 10,
    // marginLeft: 8,
    backgroundColor: '#ee735c',
    borderColor: '#ee735c',
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 15,
    borderRadius: 2
  },

  loginButton: {
    marginTop: 5,
    paddingVertical: 10,
    // marginHorizontal:5,
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: '#ee735c',
    borderWidth: 1,
    borderRadius: 4,
    color: 'red',
    // backgroundColor:'red',
    // ali
  },

  text: {
    fontSize: 20,
    color: 'red'
  }

});
