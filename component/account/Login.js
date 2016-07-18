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
      let res = await api.login('qzw', 'root')
      console.log(res)
      if (res.ok) {
        AsyncStorage.setItem('token', res.body.token)
        this.props.resetToRoute({
          name: "Layout",
          component: Layout,
          sceneConfig: Navigator.SceneConfigs.VerticalUpSwipeJump
        })
      }
    }
  }

  componentDidMount() {

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
