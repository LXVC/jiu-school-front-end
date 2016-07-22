import React, { Component } from 'react'
import { View, Text, AsyncStorage,Navigator } from 'react-native'
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter'

import Button from 'react-native-button'

import api from '../../netWork/api'
import variables from '../variables'
import Layout from '../Layout'


export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      once: false
    }
  }

  async _onClick() {
    if (!this.state.once) {
      this.setState({once: true})
      try {
        let res = await api.login('qzw', 'root')
        if (res.err) throw res.err
        console.log(res)
        if (res.ok) {
          AsyncStorage.setItem('token', res.body.token)
          AsyncStorage.setItem('id', res.body.id + '')
          this.props.resetToRoute({
            name: "Layout",
            component: Layout,
          })
        } else {
          alert('帐号验证失败')
        }
      } catch (e) {
        if (e.message === 'Network request failed') {
          alert('请求失败')
        }
        this.setState({once: false})
      } finally {

      }
    }
  }

  render() {
    return (
      <View
        style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:variables.mainColor}}>
        <Button
        style={{fontSize: 20, color: 'green'}}
        styleDisabled={{color: 'red'}}
        onPress={() => this._onClick()}>
        登录
      </Button>
      </View>
    );
  }
}
