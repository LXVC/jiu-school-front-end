import React, { Component } from 'react'
import { View, Text } from 'react-native'

import NavDefault from '../navs/NavDefault'

export default class Affiche extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{flex:1}}>
        <NavDefault title="公告"></NavDefault>
      </View>
    )
  }
}
