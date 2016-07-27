import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet} from 'react-native'

import Button from 'react-native-button'
import { Jiro } from 'react-native-textinput-effects'

import variables from '../variables'
import Nav from '../navs/NavWithLeft'
import Api from '../../netWork/api'

export default class Change extends Component{
  constructor(props) {
    super(props)
    this.state = {
      oldPwd: '',
      newPwd0: '',
      newPwd1: '',
    }
  }

  async _onClick() {
    const oldPwd = this.state.oldPwd.trim()
    const newPwd0 = this.state.newPwd0.trim()
    const newPwd1 = this.state.newPwd1.trim()
    if (oldPwd.length && newPwd0.length && newPwd1.length) {
      if (newPwd0 === newPwd1) {
        let api = new Api('/users/', true, {password: newPwd0})
        let id = await api.getId()
        api.url = `/users/${id}/`
        try {
          const res = await api.patch()
          if (res.err) throw res.err
          alert('修改成功')
        } catch (e) {
          alert('修改失败')
        }
      } else {
        alert('两次输入的密码不')
      }
    }
  }


  render() {
    return (
      <View style={{flex:1,backgroundColor: '#FFF'}}>
        <Nav title={this.props.name} toBack={this.props.toBack}></Nav>
        <View style={{paddingLeft: 10, paddingRight: 10}}>
          <Jiro
            label={'旧密码'}
            borderColor={'#ebebeb'}
            inputStyle={{ color: 'black' }}
            style={{flex:1}}
            onChangeText={(val) => {this.setState({oldPwd:val})}}/>
          <Jiro
            label={'新密码'}
            borderColor={'#ebebeb'}
            inputStyle={{ color: 'black' }}
            style={{flex:1}}
            onChangeText={(val) => {this.setState({newPwd0:val})}}/>
          <Jiro
            label={'新密码'}
            borderColor={'#ebebeb'}
            inputStyle={{ color: 'black' }}
            style={{flex:1}}
            onChangeText={(val) => {this.setState({newPwd1:val})}}/>
        </View>
        <View style={styles.container}>
          <Button
            onPress={() => {this._onClick()}}
            containerStyle={styles.btn}
            style={{fontSize: 20, color: '#FFF'}}>
            提交
          </Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  btn: {
    marginTop: 20,
    padding:10,
    height:45,
    width: variables.width * 0.66,
    overflow:'hidden',
    borderRadius:4,
    backgroundColor: variables.mainColor
   }
})
