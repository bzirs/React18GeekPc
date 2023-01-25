import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getStorageToken } from '@/utils/storage'

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://geek.itheima.net',
  prepareHeaders: headers => {
    const token = JSON.parse(getStorageToken())?.token
    console.log(token)
    // 添加请求头
    token && headers.set('Authorization', `Bearer ${token}`)
    return headers
  }
})

export default baseQuery
