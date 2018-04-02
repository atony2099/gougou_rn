import React, {Component} from 'react'
import Icon from 'react-native-vector-icons/Ionicons'



import NoMore from '../../components/nomore'
import Loading from '../../components/loading'

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ListView,
  Image,
  TextInput
} from 'react-native'

const {width, height} = Dimensions.get('window')

class Comment extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.fetchComments(this.props.rowData._id)
  }

  _renderRow (row) {
    return (
      <View key={row._id} style={styles.replyBox}>
        <Image style={styles.replyAvatar} source={{uri: util.avatar(row.replyBy.avatar)}} />
        <View style={styles.reply}>
          <Text style={styles.replyNickname}>{row.replyBy.nickname}</Text>
          <Text style={styles.replyContent}>{row.content}</Text>
        </View>
      </View>
    )
  }

  _focus () {
    this.props.navigation.navigate('Comment', {
      rowData: this.props.rowData
    })
  }

  _renderHeader () {
    const data = this.props.rowData

    return (
      <View style={styles.listHeader}>
        <View style={styles.infoBox}>
          <Image style={styles.avatar}
            source={{uri: util.avatar(data.author.avatar)}} />
          <View style={styles.descBox}>
            <Text style={styles.nickname}>{data.author.nickname}</Text>
            <Text style={styles.title}>{data.title}</Text>
          </View>
        </View>
        <View style={styles.commentBox}>
          <View style={styles.comment}>
            <TextInput
              underlineColorAndroid='transparent'
              placeholder='敢不敢评论一个...'
              style={styles.content}
              multiline
              onFocus={this._focus.bind(this)}
            />
          </View>
        </View>

        <View style={styles.commentArea}>
          <Text style={styles.commentTitle}>精彩评论</Text>
        </View>
      </View>
    )
  }

  _renderFooter () {
    const {
      commentTotal,
      isCommentLoadingTail
    } = this.props

    if (!this._hasMore() || commentTotal === 0) {
      return <NoMore />
    }

    if (isCommentLoadingTail) {
      return <Loading />
    }

    return null
  }

  _hasMore () {
    const {
      commentList,
      commentTotal
    } = this.props

    return commentList.length < commentTotal
  }

  _fetchMoreData () {
    const {
      isCommentLoadingTail,
      commentList,
      fetchComments
    } = this.props

    if (this._hasMore() && !isCommentLoadingTail) {
      fetchComments(this.props.rowData._id)
    }
  }

  _onRefresh () {
    this.props.fetchComments(this.props.rowData._id, 'recent')
  }

  render () {
    const {
      commentList
    } = this.props

    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    let dataSource = ds.cloneWithRows(commentList)

    return (
      <ListView
        dataSource={dataSource}
        renderRow={this._renderRow.bind(this)}
        renderHeader={this._renderHeader.bind(this)}
        renderFooter={this._renderFooter.bind(this)}
        onEndReached={this._fetchMoreData.bind(this)}
        onEndReachedThreshold={20}
        enableEmptySections
        showsVerticalScrollIndicator={false}
        automaticallyAdjustContentInsets={false}
      />
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
})
