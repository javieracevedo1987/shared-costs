import axios from 'axios'

export const API = axios.create({
  baseURL: 'http://localhost:3001',
})

API.interceptors.response.use(
  function (res) {
    return res.data
  },
  function (err) {
    console.error(err)
  }
)
