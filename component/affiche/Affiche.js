import React, { Component } from 'react'
import { View, Text } from 'react-native'

import Nav from '../navs/NavDefault'
import Details from './Details'

export default class Affiche extends Component{
  constructor(props) {
    super(props)
  }

  _onClick() {
    this.props.toRoute({
      component: Details
    })
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Nav title="公告"></Nav>
        <Text onPress={() => {this._onClick()}}>
          go
        </Text>
      </View>
    )
  }
}
