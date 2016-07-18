import React, { Component } from 'react'
import {
  AppRegistry,
  AsyncStorage,
  Navigator
} from 'react-native'

import Router from 'react-native-simple-router'

import variables from './component/variables'
import  Wellome from './component/Wellcome'

class App extends Component {

  constructor(props, context) {
    super(props, context)
    // AsyncStorage.setItem('token', '11')
    AsyncStorage.clear()
  }

  render() {
    let firstRoute = {
      name: 'Wellome',
      component: Wellome
    }
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
  }
}

AppRegistry.registerComponent('teacher', () => App);
