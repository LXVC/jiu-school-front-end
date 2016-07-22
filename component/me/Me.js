import React, { Component } from 'react'
import { View, Text,StyleSheet } from 'react-native'

import NavDefault from '../navs/NavDefault'
import variables from '../variables'

export default class Me extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{flex:1}}>
        <View style={styles.up}>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  up: {
    // flex: 1,
    backgroundColor: variables.mainColor,
    height: 96 * variables.pixel + 60
  }
})
