import axios from 'axios'

const local = "http://localhost:5000/api"
const Global  ="https://banoun-app.herokuapp.com"
export const client = axios.create({
  baseURL: `${Global}/api`,
  timeout: 10000,
  headers: {'Authorization': sessionStorage.getItem("token")},

})

// client.interceptors.request.use({

// })

