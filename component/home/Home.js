import React, { Component } from 'react'
import { View, Text,  } from 'react-native'
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter'

import variables from '../variables'
import Nav from '../navs/NavDefault'
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
        <Nav title="首页"></Nav>
        <Text onPress={() => this._onClick()}>
            Home
        </Text>
      </View>
    )
  }
}
