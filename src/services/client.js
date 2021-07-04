import axios from "axios";

const local = "http://localhost:5000"
const Global  ="https://banoun-app.herokuapp.com"
export const client = axios.create({
  baseURL: `${Global}/api`,
  timeout: 20000,
  // headers: {'Authorization': `Bearer ${localStorage.token}` || `Bearer ${localStorage.getItem("token")}` },

})

client.interceptors.request.use((config)=>{
  config.headers.Authorization = `Bearer ${localStorage.token}`
  return config
})

