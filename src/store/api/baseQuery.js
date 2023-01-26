import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getStorageToken } from '@/utils/storage'

export const baseUrl = 'http://geek.itheima.net'

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: headers => {
    const token = JSON.parse(getStorageToken())?.token
    // 添加请求头
    token && headers.set('Authorization', `Bearer ${token}`)
    return headers
  }
})

export default baseQuery
