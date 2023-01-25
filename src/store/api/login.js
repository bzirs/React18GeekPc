
import { createApi } from '@reduxjs/toolkit/query/react'

import baseQuery from './baseQuery'

const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery,
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
