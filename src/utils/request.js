import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 5000
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    const userToken = localStorage.getItem('access_token')

    if (userToken) {
      config.headers.Authorization = 'Bearer ' + userToken
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
