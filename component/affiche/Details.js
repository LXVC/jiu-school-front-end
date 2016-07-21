import React, { Component } from 'react'
import { View, Text } from 'react-native'

import Nav from '../navs/NavWithLeft'

export default class Details extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Nav title="公告" toBack={this.props.toBack}></Nav>
        <Text>
          公告详情
        </Text>
      </View>
    )
  }
}
