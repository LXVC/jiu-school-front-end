import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter'

import TabNavigator from 'react-native-tab-navigator'
let Item = TabNavigator.Item

import variables from './variables'
import Home from './home/Home'
import Affiche from './affiche/Affiche'
import School from './shoool/School'
import Me from './me/Me'

 export default class Main extends Component {
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

  render() {
    return (
      <TabNavigator>
        {
          variables.tabName.map((item, index) => {
            return (
              <Item
                title={item.name} key={index}
                selected={this.state.selectedIndex === index}
                renderIcon={() => <Image source={item.img}/>}
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
