import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter'


export default class Login extends Component {
  constructor(props) {
    super(props)
  }

  _onClick() {
    AsyncStorage.setItem('user', '46b06a8b537064baf2cc83ccaef246c0f87edf0e', (err) => {
      console.log('set error')
    })
    RCTDeviceEventEmitter.emit('login')
  }

  render() {
    return (
      <View style={{marginTop:40}}>
        <Text onPress={ () => {this._onClick()} }>
          登录
        </Text>
      </View>
    );
  }
}
