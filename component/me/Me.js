import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

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
          <View style={styles.aroundAvatar}>
            <Image source={require('../../assets/avatar.png')}
              style={styles.avatar} resizeMode="cover"/>
          </View>
          <Text style={styles.name}>
            朱泽鑫
            <Text style={styles.role}>
              (同学)
            </Text>
          </Text>
          <Text style={{color: '#FFF'}}>
            荣昌县初级中学九年级十班
          </Text>
        </View>
        <View style={styles.down}>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  up: {
    backgroundColor: variables.mainColor,
    height: 96 * variables.pixel + 60,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15 * variables.pixel
  },
  avatar: {
    width: 60 * variables.pixel,
    height: 60 * variables.pixel,
    borderRadius: 60 * variables.pixel / 2,
  },
  aroundAvatar: {
    width: 60 * variables.pixel + 20,
    height: 60 * variables.pixel + 20,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderRadius: (60 * variables.pixel + 20) / 2,
    marginBottom: 10
  },
  name: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#FFF',
    transform: [{translateX: 20}],
    marginBottom: 10
  },
  role: {
    fontSize: 12
  },
})
