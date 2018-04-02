[React Native 触摸事件处理详解](https://race604.com/react-native-touch-event/)


##事件
RN中除了Text,button，其他组件不支持点击事件
RN中专门提供了几个直接处理响应事件的组件，

1.  TouchableHighlight
2.  TouchableNativeFeedback,
3.  TouchableOpacity 和
4.  TouchableWithoutFeedback
区别： 反馈的ui效果不一样


包含以下回调
  1. onPressIn：点击开始；
  2. onPressOut：点击结束或者离开；
  3. onPress：单击事件回调；
  4. onLongPress：长按事件回调。
