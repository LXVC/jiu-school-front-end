import Frisbee from 'frisbee'


const api = new Frisbee({
  baseURI: 'http://127.0.0.1:8000/api/v1',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    // 'Authorization': 'Token b56e450e004aa51db85e5134967ba46c73e5e6f4'
  }
})

async function login(username, password) {
  let res = await api.post('/get-token/', {
    body: {
      username: username,
      password: password
    }
  })
  return res
}

// login('qzw', 'root')

export default {
  login,
}
