import React, { Component } from 'react'
import { View, Text } from 'react-native'

import Nav from 'react-native-navbar'

export default class Affiche extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    let left = {
      title: '返回',
      handler() {
        alert('返回')
      }
    }
    return (
      <View style={{flex:1}}>
      </View>
    )
  }
}
