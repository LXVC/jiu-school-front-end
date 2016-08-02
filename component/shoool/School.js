import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ListView } from 'react-native'

import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view'

import variables from '../variables'
import Nav from '../navs/NavDefault'
import Api from '../../netWork/api'

export default class School extends Component{
  constructor(props) {
    super(props)
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      schools: [],
      teachers: [],
    }
  }


  async componentWillMount() {
    const api1 = new Api('/keyschool/')
    const api2 = new Api('/keyteacher/')
    try {
      const res1 = await api1.get()
      if (res1.err) throw res1.err
      this.setState({schools: res1.body})

      const res2 = await api2.get()
      if (res2.err) throw res2.err
      this.setState({teachers: res2.body})

    } catch (e) {
      console.log(获取数据失败)
    }

  }

  _renderSchools(data) {
    return (
      <TouchableOpacity>
        <View style={styles.item}>
          <Text style={styles.title}>
            {data.school_name}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  _renderTeachers(data) {
    return (
      <TouchableOpacity>
        <View style={styles.item}>
          <Text style={styles.title}>
            {data.teacher_name}
            <Text style={styles.details}>
              {data.details}
            </Text>
          </Text>
        </View>
      </TouchableOpacity>
    )
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
            <ListView
              enableEmptySections={true}
              dataSource={this.state.dataSource.cloneWithRows(this.state.schools)}
              renderRow={this._renderSchools.bind(this)}/>
          </View>
          <View tabLabel='名师'>
            <ListView
              enableEmptySections={true}
              dataSource={this.state.dataSource.cloneWithRows(this.state.teachers)}
              renderRow={this._renderTeachers.bind(this)}/>
          </View>
        </ScrollableTabView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    height: 50,
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    color: variables.textColor,
    fontWeight: '500',
  },
  details: {
    fontSize: 16
  }
})
