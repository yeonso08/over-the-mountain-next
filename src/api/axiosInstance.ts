import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_APP_API_URL ?? ''

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
})

axiosInstance.interceptors.request.use(
  function (config) {
    const token = sessionStorage.getItem('authToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error.response) {
      console.error('Backend returned status code: ', error.response.status)
      console.error('Response error details: ', error.response.data)
    } else if (error.request) {
      console.error('No response received from server')
    } else {
      console.error('Error setting up the request:', error.message)
    }
  }
)

export default axiosInstance
