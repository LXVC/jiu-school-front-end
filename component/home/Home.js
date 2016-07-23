import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter'

import variables from '../variables'
import Nav from '../navs/NavDefault'
import HomeWork from './work/Work'

export default class Home extends Component {
  constructor(props, context) {
    super(props, context)
  }

  _onClick(name) {
    switch (name) {
      case '做作业':
        this.props.toRoute({
          component: HomeWork
        })
        break;
      default:
        return
    }
  }

  _renderItem(index) {
    return (
      variables.homeItems[index].map((item, index) => {
        return (
          <TouchableOpacity key={index} style={styles.item} onPress={() => {this._onClick(item.name)}}>
            <View style={[{backgroundColor: item.backgroundColor}, styles.circle]}>
              <Image source={item.icon} style={{tintColor:'#FFF'}}/>
            </View>
            <Text style={styles.itemTitle}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )
      })
    )
  }

  _renderRow() {
    return (
      [0, 1, 2].map((item) => {
        return (
          <View style={styles.row} key={item}>
            {this._renderItem(item)}
          </View>
        )
      })
    )
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:'#fafafa'}}>
        <Nav title="首页"></Nav>
        <ScrollView>
          <View style={styles.banner}>
          </View>
          {this._renderRow()}
        </ScrollView>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: 'yellow',
    height: 96 * variables.pixel
  },
  row: {
    flexDirection: 'row',
    marginTop: 7.5 * variables.pixel,
  },
  item: {
    flex: 1,
    alignItems: 'center',
  },
  itemTitle: {
    color: variables.textColor,
    fontWeight: 'bold',
    fontSize: 16
  },
  circle: {
    width: 30 * (variables.pixel + 0.5),
    height: 30 * (variables.pixel + 0.5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30 * (variables.pixel + 0.5) / 2,
    marginBottom: 4 * variables.pixel
  }
})
