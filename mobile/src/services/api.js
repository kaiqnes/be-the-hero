import axios from 'axios'

const baseURL = 'http://192.168.0.102:3333/'

const api = axios.create({
  baseURL
})

export default api