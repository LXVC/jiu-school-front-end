import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view'

import variables from '../variables'
import Nav from '../navs/NavDefault'

export default class School extends Component{
  constructor(props) {
    super(props)
    this.state = {
      status: '名校'
    }
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Nav title="名校名师"></Nav>
        <ScrollableTabView
          renderTabBar={() => <ScrollableTabBar/>}
          tabBarUnderlineColor={variables.mainColor}
          tabBarActiveTextColor={variables.mainColor}
          tabBarInactiveTextColor={variables.textColor}
          tabBarTextStyle={{fontSize:16,fontWeight:'bold'}}
          tabBarBackgroundColor='#FFF'>
          <View tabLabel='名校'>
            <TouchableOpacity>
              <Text>
                名校
              </Text>
            </TouchableOpacity>
          </View>
          <View tabLabel='名师'>
            <TouchableOpacity>
              <Text>
                名师
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollableTabView>
      </View>
    )
  }
}
