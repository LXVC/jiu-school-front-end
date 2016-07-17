import React, { Component } from 'react'
import { View, Text } from 'react-native'
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter'

import Icon from 'react-native-vector-icons/FontAwesome'
import Nav from '../../navs/NavWithLeft'

import variables from '../../variables'


export default class Work extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Nav title="作业" toBack={this.props.toBack}></Nav>
        <Text>
          HomeWork
        </Text>
      </View>
    )
  }
}
