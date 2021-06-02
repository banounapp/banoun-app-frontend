import axios from 'axios'

export const client = axios.create({
  baseURL: 'https://banoun-app.herokuapp.com/api',
  timeout: 10000
})

// client.interceptors.request.use({})

