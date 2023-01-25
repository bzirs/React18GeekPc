
import { getStorageToken } from '@/utils/storage'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://geek.itheima.net',
    prepareHeaders: headers => {
      const token = JSON.parse(getStorageToken())?.token

      // 添加请求头
      token && headers.set('Authorization', `Bearer ${token}`)
      return headers
    }
  }),
  endpoints: bulid => ({
    login: bulid.mutation({
      query: body => ({
        url: '/v1_0/authorizations',
        method: 'post',
        body
      })
    })
  })
})

export const { useLoginMutation } = loginApi

export default loginApi
