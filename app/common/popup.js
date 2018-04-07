'use strict'
// import PropTypes from 'prop-types';
import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  Dimensions,
  View
} from 'react-native'

const {width, height} = Dimensions.get('window')
export default class Popup extends React.Component {
  constructor (props) {
    super(props)
    // this.updateState(props.tips,props.showTime,shouldShow)
  }

  // updateState( {tips,showTime=1.5,shouldShow = false} = {} ){
  //   if (tips) {
  //     this.setState({tips:tips})
  //   }
  //   if(showTime){
  //     this.setState({showTime})
  //   }
  //   this.setState(shouldShow)
  // }

  componentWillReceiveProps(nextProps){
    // this.updateState(nextProps.tips, nextProps.showTime)
  }

  // closeTips(){
  //   // close
  //   if (!this.props.tips) return;
  //   setTimeout(()=> {
  //     this.setState({tips:null})
  //   },this.props.showTime)
  // }

  componentDidMount(){
    // this.closeTips()

  }
  componentDidUpdate(){
    // this.closeTips()
  }

  componentWillMount(){
      // this.setState({})
  }

  render () {
    const {tips} = this.props;
    if (tips == null) {
      return <View/>
    }

    return (
      <View style={styles.popupContainer}>
        <View style={styles.tipBoxView}>
          <View style={styles.tipBox}>
            {
              tips.title ? <View style={styles.tipTitleBox}>
                <Text style={styles.tipTitle}>{tips.title}</Text>
              </View>
              : null
            }
            {
             tips.content ? <View style={styles.tipContentBox}>
                <Text style={styles.tipContent}>{tips.content}</Text>
              </View>
              : null
            }
          </View>
        </View>
      </View>
    )
  }
}


// 1. default type
// Popup.propTypes = {
//   tips:PropTypes.object,
//   showTime:PropTypes.number,
//   // shouldShow:PropTypes.boolean
// }

// // 2.default value
// Popup.defaultProps = {
//   showTime:3000
//
// }


let styles = StyleSheet.create({
  popupContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },

  tipBoxView: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: width - 50,
    borderRadius: 12
  },

  tipBox: {
    paddingTop: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  tipTitleBox: {
    height: 30,
    // width: width - 50,
    justifyContent: 'center',
    alignItems: 'center'
  },

  tipTitle: {
    fontSize: 19,
    fontWeight: '500',
    textAlign: 'center'
  },

  tipContentBox: {
    flexDirection: 'column',
    marginBottom: 15,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  tipContent: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center'
  }
})
