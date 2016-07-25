import Frisbee from 'frisbee'
import { AsyncStorage } from 'react-native'

import variables from '../component/variables'

async function createApi(needToken=true) {
  let token = await AsyncStorage.getItem('token')
  let api = null
  if (needToken) {
    api = new Frisbee({
      baseURI: 'http://123.206.42.148:8000//api/v1',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      }
    })
  } else {
    api = new Frisbee({
      baseURI: 'http://123.206.42.148:8000/api/v1',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
  }
  return api
}

async function resolveError(func, args) {
  try {
    let res = await func(args)
    if (res.err) throw res.err
    return res
  } catch (e) {
    if (e.message === 'Network request failed') {
      alert('网络请求失败')
    } else {
      alert(e.message)
    }
    return {ok: false}
  } finally {

  }
}

async function login(username, password) {
  let api = await createApi(false)
  let res = await api.post('/get-token/', {
    body: {
      username: username,
      password: password
    }
  })
  if (res.status === 400) {
    throw Error(variables.errorAuth)
  }
  return res
}

async function getUser() {
  let id = await AsyncStorage.getItem('id')
  let api = await createApi()
  let res = await api.get(`/users/${id}/`)
  if (res.status === 401) {
    throw Error(variables.errorAuth)
  }
  return res
}

async function getAffiches() {
  let api = await createApi()
  let res = await api.get('/notices/')
  if (res.status === 401) {
    throw Error(variables.errorAuth)
  }
  return res
}

async function g() {
  let api = await createApi()
  let id = await AsyncStorage.getItem('id')
  let res = await resolveError(api.get, `/users/${id}/`)
  return res
}

export default {
  login,
  getUser,
  getAffiches,
}
