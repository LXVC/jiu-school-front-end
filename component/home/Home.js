import React, { Component } from 'react'
import { View, Text } from 'react-native'

import Nav from 'react-native-navbar'


export default class Home extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <View style={{flex:1,marginTop:40}}>
        <Text>
          Home
        </Text>
      </View>
    )
  }
}
