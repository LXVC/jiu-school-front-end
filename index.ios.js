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

// import api from './netWork/index'
import variables from './component/variables'
import Login from './component/account/Login'
import Layout from './component/Layout'


import Frisbee from 'frisbee'

const api = new Frisbee({
  baseURI: 'http://127.0.0.1:8000/api/v1',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    // 'Authorization': 'Token 46b06a8b537064baf2cc83ccaef246c0f87edf0e'
  }
})

// api.get('/users').then((err, res) => {
//   console.log(err, res);
// })
async function getUser() {
  try {
    let res = await api.post('/get-token', {
      body: {
        username: 'qzw',
        password: 'root'
      }
    })
    if (res.err) throw res.err
    auth = `Token ${res.body.token}`
    console.log(auth)
    let users = await fetch('http://127.0.0.1:8000/api/v1/users', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': auth
      },
    })
    console.log(res);
    console.log(users);
  } catch (e) {
    console.log(e);
  } finally {

  }
}


getUser()

class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      logined: 0
    }
    AsyncStorage.clear()
  }

  async componentWillMount() {
    let user = await AsyncStorage.getItem('user')
    if (user) {
      setTimeout(() => {
        this.setState( {logined: 2} )
      }, 300)
    } else {
      setTimeout(() => {
        this.setState( {logined: 1} )
      }, 300)
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
