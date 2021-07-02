import axios from "axios";

const local = "http://localhost:5000";
const Global = "https://banoun-app.herokuapp.com";
export const client = axios.create({
  baseURL: `${Global}/api`,
  timeout: 10000,
  headers: { Authorization: `Bearer ${sessionStorage.token}` },
});

// client.interceptors.request.use({

// })
