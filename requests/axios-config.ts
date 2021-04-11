import axios from "axios";


export const instanceAxios = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  withCredentials: true
})
