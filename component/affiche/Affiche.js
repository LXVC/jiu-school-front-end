import React, { Component } from 'react'
import { View, Text, ListView, TouchableOpacity, StyleSheet,Image } from 'react-native'

import Nav from '../navs/NavDefault'
import Login from '../account/Login'
import variables from '../variables'
import api from '../../netWork/api'
import Details from './Details'

// let notices = []
export default class Affiche extends Component{
  constructor(props) {
    super(props)
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      affiches: [],
    }
  }

  async componentWillMount() {
    try {
      let res = await api.getAffiches()
      if (res.err) throw res.err
      this.setState({affiches: res.body})
    } catch (e) {
      if (e.message === 'Network request failed') {
        alert('网络请求失败')
      }
      if (e.message === variables.errorAuth) {
        alert('帐号验证失败，请重新登录！')
        this.props.resetToRoute({
          component: Login
        })
      }
    } finally {

    }
  }

  _onClick(notice, date) {
    this.props.toRoute({
      component: Details,
      data: {
        notice,
        date
      },
    })
  }

  _renderRow(data) {
    const date = new Date(data.created_date)
    const created_date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
    return (
      <TouchableOpacity onPress={() => {this._onClick(data, created_date)}}>
        <View style={styles.item}>
          <View style={styles.container}>
            <Image
              source={require('../../assets/audio-2.png')}
              style={styles.icon}
              resizeMode="contain"/>
            <View style={styles.rightContainer}>
              <Text style={styles.title}>{data.title}</Text>
              <Text style={styles.date}>{created_date}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Nav title="公告"></Nav>
        <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource.cloneWithRows(this.state.affiches)}
          renderRow={this._renderRow.bind(this)}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fafafa',
  },
  container: {
   flex: 1,
   flexDirection: 'row',
   height: 50,
   paddingLeft: 10,
   alignItems: 'center',
   borderBottomWidth: 1,
   borderColor: '#cecece'
  },
  icon: {
    // height : 20,
    // width : 20,
  },
  rightContainer: {
    flex: 1,
    paddingLeft: 20,
    justifyContent: 'center',
  },
  title: {
    color: variables.mainColor,
    fontSize: 18,
    fontWeight: 'bold'
  },
  date: {
    color: variables.mainColor
  }
})
