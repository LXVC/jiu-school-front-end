import React, { Component } from 'react'
import { View, Text, ListView, TouchableOpacity, StyleSheet,Image } from 'react-native'

import Button from 'react-native-button'

import variables from '../variables'
import Nav from '../navs/NavWithLeft'

export default class Change extends Component{
  constructor(props) {
    super(props)
  }

  _onClick() {
    alert(1)
  }

  render() {
    return (
      <View>
        <Nav title={this.props.name} toBack={this.props.toBack}></Nav>
        <View style={styles.container}>
          <Button
            onPress={() => {this._onClick()}}
            containerStyle={styles.btn}
            style={{fontSize: 20, color: '#FFF'}}>
            提交
          </Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  btn: {
    marginTop: 20,
    padding:10,
    height:45,
    width: variables.width * 0.66,
    overflow:'hidden',
    borderRadius:4,
    backgroundColor: variables.mainColor
   }
})
