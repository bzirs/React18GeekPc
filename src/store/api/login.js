
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://geek.itheima.net'
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
