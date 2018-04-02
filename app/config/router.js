import React from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';
import List from '../screen/homeList'
import User from '../screen/user/user'
import Detail from '../screen/detail'
import VideoDetail from '../screen/videoDetail'
import Login from '../screen/user/login'
import Icon from 'react-native-vector-icons/Ionicons';



export const Tab = TabNavigator({
  Home: {
    screen: List,
    navigationOptions: {
      headerTitle:'推荐',
      tabBarLabel: 'home',
      tabBarLabel: 'Feed',
      tabBarIcon: ({tintColor}) => <Icon name = "ios-videocam-outline" size = {
        28
      }
      color = {tintColor}
      />,
    }
  },
  User: {
    screen: User,
    navigationOptions: {
      headerTitle: '个人中心',
      tabBarLabel: 'person',
      tabBarIcon: ({tintColor}) => <Icon name = "ios-recording-outline" size = {
        35
      }
      color={tintColor}
      size={28}
      />
    }
  }

}, {

  initialRouteName: 'Home',
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: 'orange',
    inactiveTintColor:'red',
    labelStyle: {
      fontSize: 12
    },
    style: {
      // backgroundColor: 'blue',
    }
  }
})

export const Root = StackNavigator({
  Tab: {
    screen: Tab
  },

  Detail: {
    screen: Detail
  },

  Home: {
    screen: List,
    navigationOptions: {
      headertitle: 'home'
    }
  },

  User: {
    screen: User,
    navigationOptions: {
      title: 'user'
    }
  },

  Login: {
    screen: Login,
    navigationOptions: {
      title: 'login'
    }
  }
}, {
  initialRouteName: "Login",
  navigationOptions: {
    headerTintColor:'red'
  },
  mode: 'card',
})
