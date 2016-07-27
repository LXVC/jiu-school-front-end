import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

import NavDefault from '../navs/NavDefault'
import variables from '../variables'
import Api from '../../netWork/api'

import Change from './ChangePassWord'

const list = [{
  icon: require('../../assets/like.png'),
  name: '我的信息'
},{
  icon: require('../../assets/8.png'),
  name: '修改密码'
},{
  icon: require('../../assets/2.png'),
  name: '申请激活码',
  marginStyle: {marginBottom: 5 * variables.pixel},
  borderStyle: {borderBottomColor:'#fafafa'}
},{
  icon: require('../../assets/alert-transparent.png'),
  name: '意见反馈'
},{
  icon: require('../../assets/info-2.png'),
  name: '关于',
  // borderStyle: {borderBottomColor:'#fafafa'}
},{
  icon: require('../../assets/info-2.png'),
  name: '检查更新',
}]

export default class Me extends Component{
  constructor(props) {
    super(props)
  }

  _renderItem() {
    return list.map((item, index) => {
      return (
        <TouchableOpacity key={index} onPress={() => {this._onClick(item.name)}}>
          <View style={[styles.item,item.marginStyle]}>
            <View style={[styles.container,item.borderStyle]}>
              <Image
                source={item.icon}
                style={styles.icon}
                resizeMode="contain"/>
              <View style={styles.rightContainer}>
                <Text style={styles.title}>{item.name}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )
    })
  }

  async _onClick(name) {
    switch (name) {
      case '修改密码':
          this.props.toRoute({
            name: name,
            component: Change
          })
        break;
      case '检查更新':
        const api = new Api('/version/')
        try {
          let res = await api.get()
          if (res.err) throw res.err
          if (res.body.version > variables.version) {
            alert(`App 最新版本是${res.body.version}!`)
          } else {
            alert('您这是最新版本')
          }
        } catch (e) {
          alert('update error')
        } finally {

        }
      default:

    }
  }

  render() {
    return (
      <View style={{flex:1}}>
        <View style={styles.up}>
          <View style={styles.aroundAvatar}>
            <Image source={require('../../assets/avatar.png')}
              style={styles.avatar} resizeMode="cover"/>
          </View>
          <Text style={styles.name}>
            朱泽鑫
            <Text style={styles.role}>
              (同学)
            </Text>
          </Text>
          <Text style={{color: '#FFF'}}>
            荣昌县初级中学九年级十班
          </Text>
        </View>
        <View style={styles.down}>
          {this._renderItem()}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  up: {
    backgroundColor: variables.mainColor,
    height: 96 * variables.pixel + 60,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15 * variables.pixel
  },
  avatar: {
    width: 60 * variables.pixel,
    height: 60 * variables.pixel,
    borderRadius: 60 * variables.pixel / 2,
  },
  aroundAvatar: {
    width: 60 * variables.pixel + 20,
    height: 60 * variables.pixel + 20,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderRadius: (60 * variables.pixel + 20) / 2,
    marginBottom: 10
  },
  name: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#FFF',
    transform: [{translateX: 20}],
    marginBottom: 10
  },
  role: {
    fontSize: 12
  },
  item: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fafafa',
  },
  icon: {
    width: 14 * variables.pixel
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
  rightContainer: {
    flex: 1,
    paddingLeft: 20,
    justifyContent: 'center',
  },
  title: {
    color: variables.textColor,
    fontSize: 18,
    fontWeight: 'bold'
  },
})
