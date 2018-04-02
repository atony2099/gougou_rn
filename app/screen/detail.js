/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Ionicons'
import VideoDetail from './videoDetail'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
  Image,
  ActivityIndicator
} from 'react-native';

const {width, height} = Dimensions.get('window')
const screenWidth = width;
const screenHeight = width * 0.56;

export default class user extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      videoOk: true,
      videoLoaded: false, // 视频加载完毕
      playing: false,
      paused: false,
      videoTotal: 0.0,
      currentTime: 0.0,
      // video player
      rate: 1,
      muted: false,
      resizeMode: 'contain',
      repeat: false

    }

  }
  render() {
    const {params} = this.props.navigation.state;
    console.log(params.video, "current ===== params");

    return (<View style={styles.container}>

      <View style={styles.videoCotainer}>
        <Video source={{
            uri: params.video
          }}
          // Can be a URL or a local file.
          ref={(ref) => {
            this.player = ref
          }}
          // Store reference
          rate={1.0}
          // 0 is paused, 1 is normal.
          volume={1.0}
          // 0 is muted, 1 is normal.
          muted={false}
          // Mutes the audio entirely.
          paused={this.state.paused}
          // Pauses playback entirely.
          resizeMode={this.state.resizeMode}
          // Fill the whole screen at aspect ratio.*
          repeat={true}
          // Repeat forever.
          playInBackground={false}
          // Audio continues to play when app entering background.
          playWhenInactive={false}
          // [iOS] Video continues to play when control or notification center are shown.
          ignoreSilentSwitch={"ignore"}
          // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
          progressUpdateInterval={250.0}
          // [iOS] Interval to fire onProgress (default to ~250ms)
          onLoadStart={this._loadStart}
          // Callback when video starts to load
          onLoad={this._onLoad.bind(this)}
          // Callback when video loads
          onProgress={this._setProgress.bind(this)}
          // Callback every ~250ms with currentTime
          onEnd={this.onEnd}
          // Callback when playback finishes
          onError={this._onError.bind(this)}
          // Callback when video cannot be loaded
          onBuffer={this.onBuffer}
          // Callback when remote video is buffering
          onTimedMetadata={this.onTimedMetadata}
          // Callback when the stream receive some metadata
          style={styles.backgroundVideo}/>
          {!this.state.videoLoaded && <ActivityIndicator color='#ee735c' style={styles.loading}/>}
          {
            this.state.videoLoaded
              ? <TouchableOpacity onPress={this._playVideo.bind(this)} style={styles.playButton}>
                  {
                    !this.state.playing
                      ? <Icon name='ios-play' size={48} style={styles.playIcon}/>
                      : null
                  }
                </TouchableOpacity>
              : null
          }
          {

          }
      </View>
      {
        this.state.videoLoaded &&
        <View style= {[styles.playBox,{width:this._getCurrentCompletedWidth()}]}>

        </View>
      }


    </View>)

  }

  componentDidMount(){
    console.log("====== VideoDetail componentDidMount");

  }

  _getCurrentCompletedWidth(){
    return (this.state.currentTime / this.state.duration ) * screenWidth
  }

  _onError(e) {
    this.setState({videoOk: false})
  }

  _loadStart() {
    console.log("load - start");
  }

  _onLoad(data) {
    console.log("load - finish");
    this.setState({duration: data.duration})
  }

  _setProgress(data) {
    let newState = {
      currentTime: data.currentTime
    };
    if (!this.state.videoLoaded) {
      newState.videoLoaded = true;
      newState.playing = true;
    }
    this.setState(newState, () => console.log("after pause==++", this.state));
  }

  _playVideo() {
    //
    this.setState({
      paused: this.state.playing,
      playing: !this.state.playing
    }, () => console.log("after pause==", this.state))
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  videoCotainer: {
    width: screenWidth,
    height: screenHeight
  },

  backgroundVideo: {
    width: '100%',
    height: '100%'
  },

  playButton: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 0,
    left: 0
  },

  playIcon: {
    position: 'absolute',
    textAlign: 'center',
    width: 48,
    height: 48,
    borderRadius:24,
    color: 'red',
    top: screenHeight * 0.5 - 24,
    alignSelf:'center'
  },

  loading: {
    position: 'absolute',
    width: screenWidth,
    height: screenHeight,
    color: 'red'
  },

  playBox:{
    width:1,
    height:4,
    backgroundColor:'red'
  }

});
