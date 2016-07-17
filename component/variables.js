import {Dimensions, PixelRatio} from 'react-native'

let {width, height} = Dimensions.get('window')

export default {
  width,
  height,
  tabName: [{
    name: '首页',
    img: require('../assets/HOME.png')
  },{
    name: '公告',
    img: require('../assets/BELL.png')
  },{
    name: '名校名师',
    img: require('../assets/GRID.png')
  },{
    name: '我',
    img: require('../assets/USER.png')
  }],
  mainColor: '#53C2E0',
  pixel: PixelRatio.get()
}
