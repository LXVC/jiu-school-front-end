import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Nav from '../navs/NavWithLeft'
import variables from '../variables'

export default class Details extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    const {title, created_by, content} = this.props.data.notice
    const {date} = this.props.data
    return (
      <View style={{flex:1}}>
        <Nav title="公告" toBack={this.props.toBack}></Nav>
        <View style={styles.main}>
          <Text style={styles.title}>
            {title}
          </Text>
          <Text style={styles.time}>
            时间：{`${date}  `}
            作者: {created_by}
          </Text>
          <Text style={[styles.time,{textAlign:'left'}]}>
            {`        ${content}`}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#FFF',
    paddingTop: 10 * variables.pixel,
    paddingLeft: 5 * variables.pixel,
    paddingRight: 5 * variables.pixel,
    paddingBottom: 10 * variables.pixel,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: variables.textColor,
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5 * variables.pixel
  },
  time: {
    color: variables.textColor,
    fontWeight: '500',
    marginBottom: 5 * variables.pixel
  }
})
