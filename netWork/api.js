import { AsyncStorage } from 'react-native'

import Frisbee from 'frisbee'

import variables from '../component/variables'

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

export default class Api {

  constructor(url, needToken=true, criteria={}) {
    this.needToken = needToken
    this.url = url
    this.criteria = criteria
  }

  async getToken() {
    const ret = await AsyncStorage.getItem('token')
    return ret
  }

  async setToken(val) {
    AsyncStorage.setItem('token', val)
  }

  async getId() {
    const ret = await AsyncStorage.getItem('id')
    return ret
  }

  setId(val) {
    AsyncStorage.setItem('id', val)
  }

  async getVersion() {
    const ret = await AsyncStorage.getItem('version')
    return ret
  }

  setVersion(val) {
    AsyncStorage.setItem('version', val)
  }

  _buildQuery(criteria) {
    return Object.keys(criteria).map(function(key) {
      return [key, criteria[key]].map(encodeURIComponent).join('=')
    }).join('&')
  }

  async _createApi(needToken) {
    let token = await this.getToken()
    let api = null
    if (this.needToken) {
      api = new Frisbee({
        baseURI: variables.baseURI,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
        }
      })
    } else {
      api = new Frisbee({
        baseURI: variables.baseURI,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
    }
    return api
  }

  async get() {
    this.api = await this._createApi(this.needToken)
    this.url = `${this.url}?${this._buildQuery(this.criteria)}`
    const res = await this.api.get(this.url)
    return res
  }

  async post() {
    this.api = await this._createApi(this.needToken)
    const res = await this.api.post(this.url, {
      body: this.criteria
    })
    return res
  }

  async put() {
    this.api = await this._createApi(this.needToken)
    const res = await this.api.put(this.url, {
      body: this.criteria
    })
    return res
  }

  async patch() {
    this.api = await this._createApi(this.needToken)
    const res = await this.api.patch(this.url, {
      body: this.criteria
    })
    return res
  }

  async del() {
    this.api = await this._createApi(this.needToken)
    const res = await this.api.del(this.url)
    return res
  }

}
