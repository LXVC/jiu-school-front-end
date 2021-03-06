import React, { Component } from 'react'
import { View, Text, Image, Navigator } from 'react-native'
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter'

import TabNavigator from 'react-native-tab-navigator'
let Item = TabNavigator.Item

import variables from './variables'
import Api from '../netWork/api'
import Home from './home/Home'
import Affiche from './affiche/Affiche'
import School from './shoool/School'
import Me from './me/Me'
import Login from './account/Login'


 export default class Layout extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      selectedIndex: 0
    }
  }

  _renderItem(index) {
    switch (index) {
      case 0:
        return <Home toRoute={this.props.toRoute}/>
        break;
      case 1:
        return <Affiche toRoute={this.props.toRoute}/>
        break;
      case 2:
        return <School toRoute={this.props.toRoute}/>
        break;
      case 3:
        return <Me toRoute={this.props.toRoute}/>
        break;
    }
  }

  componentWillMount() {
    
  }

  render() {
    return (
      <TabNavigator>
        {
          variables.tabName.map((item, index) => {
            return (
              <Item
                title={item.name} key={index}
                selected={this.state.selectedIndex === index}
                renderIcon={() => <Image source={item.img} style={{tintColor: '#888888'}}/>}
                renderSelectedIcon={() => <Image source={item.img} style={{tintColor: variables.mainColor}}/>}
                onPress={() => {
                  this.setState({selectedIndex: index})
                }}>
                {this._renderItem(index)}
              </Item>
            )
          })
        }
      </TabNavigator>
    )
  }
}
