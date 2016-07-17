import React, { Component } from 'react'
import { View, Text,  } from 'react-native'
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter'

import Nav from 'react-native-navbar'
import Router from 'react-native-simple-router'

import variables from '../variables'
import NavDefault from '../navs/NavDefault'
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
      <View style={{flex:1,backgroundColor:'#FFF'}}>
        <NavDefault title="首页"></NavDefault>
        <Text onPress={() => this._onClick()}>
            Home
        </Text>
      </View>
    )
  }
}
