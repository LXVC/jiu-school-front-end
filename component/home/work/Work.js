import React, { Component } from 'react'
import { View, Text } from 'react-native'
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter'

import Nav from 'react-native-navbar'

import variables from '../../variables'


export default class Work extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    let left = {
      title: 'Back',
      handler: () => {
        this.props.toBack()
      }
    }
    return (
      <View style={{flex:1}}>
        <Nav title={{title:"作业"}} leftButton={left}
          style={{backgroundColor:variables.mainColor}}
          statusBar={{tintColor:variables.mainColor}}>
        </Nav>
        <Text>
          HomeWork
        </Text>
      </View>
    )
  }
}
