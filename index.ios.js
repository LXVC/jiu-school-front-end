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
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter'

import Router from 'react-native-simple-router'

import variables from './component/variables'
import Login from './component/account/Login'
import Layout from './component/Layout'

class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      logined: 0
    }
    // AsyncStorage.clear()
  }

  async componentWillMount() {
    let user = await AsyncStorage.getItem('user')
    if (user) {
      this.setState({
        logined: 2
      })
    } else {
      this.setState({
        logined: 1
      })
    }
  }

  componentDidMount() {
    RCTDeviceEventEmitter.addListener('login', () => {
      this.setState({
        logined: 2
      })
    })
  }

  render() {
    let firstRoute = {
      name: 'Layout',
      component: Layout
    }
    switch (this.state.logined) {
      case 0:
        return (
          <View style={{flex:1,justifyContent:'center'}}>
            <Text>
              检查登录状态中。。。
            </Text>
          </View>
        )
        break;
      case 1:
        return <Login/>
        break;
      case 2:
        return (
          <Router
            firstRoute={firstRoute}
            headerStyle={{backgroundColor:variables.mainColor,top:0}}
            hideNavigationBar={true}
            noStatusBar={true}
            handleBackAndroid={true}
            bgStyle={{backgroundColor:'#ebebeb'}}>
          </Router>
        )
        break;
    }
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('teacher', () => App);
