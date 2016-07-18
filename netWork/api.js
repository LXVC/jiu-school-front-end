import Frisbee from 'frisbee'
import { AsyncStorage } from 'react-native'

async function createApi(needToken=true) {
  let token = await AsyncStorage.getItem('token')
  let api = null
  if (needToken) {
    api = new Frisbee({
      baseURI: 'http://127.0.0.1:8000/api/v1',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      }
    })
  } else {
    api = new Frisbee({
      baseURI: 'http://127.0.0.1:8000/api/v1',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
  }
  return api
}


async function login(username, password) {
  let api = await createApi(false)
  let res = await api.post('/get-token/', {
    body: {
      username: username,
      password: password
    }
  })
  return res
}

async function getUsers() {
  let api = await createApi()
  let res = await api.get('/users/')
  return res
}


export default {
  login,
  getUsers
}
