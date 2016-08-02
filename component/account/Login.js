import React, { Component } from 'react'
import { View, Text, AsyncStorage,Navigator } from 'react-native'
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter'

import Button from 'react-native-button'

import Api from '../../netWork/api'
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
      let api = new Api('/get-token/', false , {
        username: 'qzw',
        password: 'root'
      })
      try {
        let res = await api.post()
        if (res.err) throw res.err
        console.log(res)
        api.setToken(res.body.token)
        api.setId(res.body.id + '')
        this.props.resetToRoute({
          name: 'layout',
          component: Layout
        })
      } catch (e) {
        this.setState({once: false})
        alert('login err')
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
