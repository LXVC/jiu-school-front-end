import React, { Component } from 'react'
import { View, Text } from 'react-native'
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter'

import Nav from 'react-native-navbar'
import Router from 'react-native-simple-router'

import variables from '../variables'
import HomeWork from './work/Work'

class _Home extends Component {
  constructor(props, context) {
    super(props, context)
  }

  _onClick() {
    setTimeout(() => {
      RCTDeviceEventEmitter.emit('hide')
    }, 0)
    this.props.toRoute({
      name: '作业',
      component: HomeWork
    })
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Text onPress={() => this._onClick()}>
          Home
        </Text>
      </View>
    )
  }
}

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let firstRoute = {
      name: '首页',
      component: _Home
    }
    return (
      <Router firstRoute={firstRoute}
        headerStyle={{
            backgroundColor: variables.mainColor
          }}>
      </Router>
    )
  }
}
