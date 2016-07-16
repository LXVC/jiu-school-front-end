import React, { Component } from 'react'
import { View, Text } from 'react-native'
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter'


export default class Work extends Component {
  constructor(props, context) {
    super(props, context)
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.routeEmitter.addListener('didPop', (route) => {
        console.log(route)
        RCTDeviceEventEmitter.emit('show')
      })
    }, 0)
  }

  componentWillUnmount() {
    setTimeout(() => {
      RCTDeviceEventEmitter.emit('show')
    }, 0)
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Text>
          HomeWork
        </Text>
      </View>
    )
  }
}
