import React, { Component } from 'react'
import { View, Text } from 'react-native'
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter'

import TabNavigator from 'react-native-tab-navigator'
let Item = TabNavigator.Item

import variables from './variables'
import Home from './home/Home'
import Affiche from './affiche/Affiche'


 export default class Main extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      selectedIndex: 0,
      tabBarHeight: 49
    }
  }

  componentDidMount() {
    RCTDeviceEventEmitter.addListener('hide', () => {
      this.setState({
        tabBarHeight: 0
      })
    })

    RCTDeviceEventEmitter.addListener('show', () => {
      this.setState({
        tabBarHeight: 49
      })
    })
  }

  _renderItem(index) {
    switch (index) {
      case 0:
        return <Home/>
        break;
      default:
        return <Affiche/>
    }
  }

  render() {
    return (
      <TabNavigator
        tabBarStyle={{ height: this.state.tabBarHeight, overflow: 'hidden' }}
        sceneStyle={{ paddingBottom: this.state.tabBarHeight }}>
          {
            variables.tabName.map((name, index) => {
              return (
                <Item title={name} key={index}
                  selected={this.state.selectedIndex === index}
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
