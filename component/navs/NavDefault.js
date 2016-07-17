import React, { Component } from 'react'
import { View, Text } from 'react-native'

import Nav from 'react-native-navbar'

import variables from '../variables'


export default class NavDefault extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Nav
        title={{title:  this.props.title}}
        style={{backgroundColor:variables.mainColor}}
        statusBar={{tintColor:variables.mainColor}}>
      </Nav>
    )
  }
}
