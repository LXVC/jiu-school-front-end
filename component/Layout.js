import React, { Component } from 'react'
import { View, Text } from 'react-native'

 export default class Main extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{marginTop:40}}>
        <Text>
          主页
        </Text>
      </View>
    )
  }
}
