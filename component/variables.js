import {Dimensions, PixelRatio, AsyncStorage} from 'react-native'

const {width, height} = Dimensions.get('window')

const dev = true
let baseURI

if (dev) {
  baseURI = 'http://192.168.1.5:8000/api/v1'
} else {
  baseURI = 'http://123.207.165.109:8000/api/v1'
}

export default {
  width,
  height,
  baseURI,
  errorAuth: 'auth error',
  version: 1.0,
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
  textColor: '#737070',
  pixel: PixelRatio.get(),
  homeItems: [[{
    name: '做作业',
    icon: require('../assets/NOTEPAD.png'),
    backgroundColor: '#f96065'
  },{
    name: '看成绩',
    icon: require('../assets/CALENDAR.png'),
    backgroundColor: '#f47a55'
  },{
    name: '品美文',
    icon: require('../assets/BOOK.png'),
    backgroundColor: '#27ae61'
  }],[{
    name: '拓展知识',
    icon: require('../assets/BOOK-2.png'),
    backgroundColor: '#01b2ff'
  },{
    name: '游学名校',
    icon: require('../assets/PIN.png'),
    backgroundColor: '#fbe552'
  },{
    name: '备战升学',
    icon: require('../assets/CHART.png'),
    backgroundColor: '#cb69f5'
  }],[{
    name: '薄弱知识',
    icon: require('../assets/DOCUMENT.png'),
    backgroundColor: '#50c0aa'
  },{},{}]]
}
