import React, { Component } from 'react'
import { View, Text, AsyncStorage, Navigator } from 'react-native'

import variables from './variables'
import Login from './account/Login'
import Layout from './Layout'

export default class Wellome extends Component{
  constructor(props) {
    super(props)
  }

  async componentWillMount() {
    let token = await AsyncStorage.getItem('token')
    if (token) {
      setTimeout(() => {
        this.props.resetToRoute({
        name: "Layout",
        component: Layout,
        sceneConfig: Navigator.SceneConfigs.VerticalUpSwipeJump
      })}, 500)
    } else {
      setTimeout(() => {
        this.props.resetToRoute({
        name: "Login",
        component: Login,
        sceneConfig: Navigator.SceneConfigs.VerticalDownSwipeJump
      })}, 1000)
    }
  }

  render() {
    return (
      <View
        style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:variables.mainColor}}>
        <Text style={{color:'#FFF'}}>
          欢迎光临！
        </Text>
      </View>
    )
  }
}
