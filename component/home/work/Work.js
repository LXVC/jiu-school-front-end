import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter'

import Nav from '../../navs/NavWithLeft'
import variables from '../../variables'

const items = [{
  name: '作业',
  bgc: '#ffe271',
  img: require('../../../assets/NOTEPAD.png')
},{
  name: '作业记录本',
  bgc: '#fd948b',
  img: require('../../../assets/NOTEPAD---ADD.png')
}]

export default class Work extends Component {
  constructor(props, context) {
    super(props, context)
  }

  _renderItem() {
    return (
      items.map((item, index) => {
        return (
          <View style={styles.item} key={index}>
            <TouchableOpacity onPress={() => {this._onClick(index)}}>
              <View style={[styles.circle,{backgroundColor:item.bgc}]}>
                <Image source={item.img}/>
              </View>
              <Text style={styles.text}>
                {item.name}
              </Text>
            </TouchableOpacity>
          </View>
        )
      })
    )
  }

  _onClick(index) {
    if (index === 0) {
      console.log('作业')
    } else {
      console.log('记录本')
    }
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Nav title="作业" toBack={this.props.toBack}></Nav>
        <Image style={styles.banner} resizeMode="cover" source={require('../../../assets/lovehomework.png')}/>
        <View style={{flexDirection:'row'}}>
          {this._renderItem()}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  banner: {
    width: variables.width,
    // height: 86 * variables.pixel
  },
  item: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FFF',
    height: 86 * variables.pixel
  },
  circle: {
    width: 30 * (variables.pixel + 0.5),
    height: 30 * (variables.pixel + 0.5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30 * (variables.pixel + 0.5) / 2,
    marginBottom: 4 * variables.pixel,
  },
  text: {
    marginTop: 5,
    textAlign: 'center',
    color: variables.textColor,
    fontWeight: '500'
  }
})
