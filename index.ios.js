/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native'

import { Area, AreaList, scene, Side, SceneStatus } from 'scene-router'
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter'

import Login from './component/account/Login'
import Layout from './component/Layout'

class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      logined: false
    }
    // AsyncStorage.clear()
  }

  componentWillMount() {
    AsyncStorage.getItem('user', (err, result) => {
      if (err) {
        console.log('get error')
      } else {
        console.log(result)
        this.setState({
          logined: Boolean(result)
        })
      }
    })
  }

  componentDidMount() {
    RCTDeviceEventEmitter.addListener('login', () => {
      this.setState({
        logined: true
      })
    })
  }

  render() {
    if (this.state.logined) {
      return (
        <Layout/>
      )
    } else {
      return (
        <Login/>
      )
    }
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('teacher', () => App);
