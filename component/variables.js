import {Dimensions, PixelRatio} from 'react-native'

let {width, height} = Dimensions.get('window')

export default {
  width,
  height,
  tabName: ['首页', '公告', '名校名师', '我'],
  mainColor: '#53C2E0',
  pixel: 1 / PixelRatio.get()
}
