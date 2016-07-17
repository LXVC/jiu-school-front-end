import React, {Component} from 'React'
import { View, Text, TouchableOpacity } from 'react-native'

import Nav from 'react-native-navbar'
import Icon from 'react-native-vector-icons/FontAwesome'
import variables from '../variables'

export default class NavWithLeft extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Nav title={{title:this.props.title,tintColor:'#FFF'}}
        leftButton={
          <TouchableOpacity
            style={{flex:1,width:50,paddingLeft:8}}
            onPress={() => {this.props.toBack()}}>
            <Icon
              name="angle-left"
              color="#FFF"
              size={30}>
            </Icon>
          </TouchableOpacity>
        }
        style={{backgroundColor:variables.mainColor,flex:1,alignItems: 'center'}}
        statusBar={{tintColor:variables.mainColor}}>
      </Nav>
    )
  }
}
