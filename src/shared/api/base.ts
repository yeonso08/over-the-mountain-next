import axios from 'axios'
import { headers } from 'next/headers'

export const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'

// 서버 사이드용 API 인스턴스
export const createServerApi = async () => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  try {
    const headersList = await headers()
    const cookieHeader = await headersList.get('cookie')
    const token = cookieHeader?.split('token=')?.[1]?.split(';')?.[0]

    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
  } catch (error) {
    console.error('Error getting headers:', error)
  }

  return api
}

// 클라이언트 사이드용 API 인스턴스는 동일하게 유지
export const createClientApi = () => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  api.interceptors.request.use(
    (config) => {
      config.withCredentials = true
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response?.status === 401) {
        try {
          await axios.post('/api/auth/refresh')
          return api.request(error.config)
        } catch {
          window.location.href = '/login'
        }
      }
      return Promise.reject(error)
    }
  )

  return api
}

// 사용할 때는 환경에 따라 다른 인스턴스 생성
export const api =
  typeof window === 'undefined' ? createServerApi() : createClientApi()
