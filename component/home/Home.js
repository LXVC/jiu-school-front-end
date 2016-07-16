import React, { Component } from 'react'
import { View, Text, Navigator } from 'react-native'
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter'

import Nav from 'react-native-navbar'
import Router from 'react-native-simple-router'

import variables from '../variables'
import HomeWork from './work/Work'

export default class Home extends Component {
  constructor(props, context) {
    super(props, context)
  }

  _onClick() {
    this.props.toRoute({
      component: HomeWork
    })
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Nav title={{title:"首页"}}
          style={{backgroundColor:variables.mainColor}}
          statusBar={{tintColor:variables.mainColor}}>
        </Nav>
        <Text onPress={() => this._onClick()}>
          Home
        </Text>
      </View>
    )
  }
}
