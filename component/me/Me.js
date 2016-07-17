import React, { Component } from 'react'
import { View, Text } from 'react-native'

import NavDefault from '../navs/NavDefault'
import variables from '../variables'

export default class Me extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:variables.mainColor}}>
        <Text>
          个人中心
        </Text>
      </View>
    )
  }
}
