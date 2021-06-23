import axios from 'axios'

export const client = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 10000,
  headers: {'Authorization': sessionStorage.token},

})

// client.interceptors.request.use({

// })

