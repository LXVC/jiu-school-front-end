import Frisbee from 'frisbee'

const api = new Frisbee({
  baseURI: 'http://127.0.0.1:8000/api/v1',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Token 46b06a8b537064baf2cc83ccaef246c0f87edf0e',
  }
})

export default api
