import {Dimensions, PixelRatio, AsyncStorage} from 'react-native'

let {width, height} = Dimensions.get('window')

let token = ''
// async function getTokenFromAsyncStorage() {
//   token = await AsyncStorage.getItem('token')
// }
//
// getTokenFromAsyncStorage()
// // let token = getTokenFromAsyncStorage()
AsyncStorage.getItem('toke', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result === null);
      // token = result
    }
})

console.log('token', token);
export default {
  width,
  height,
  token,
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
