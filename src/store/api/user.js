import { createApi } from '@reduxjs/toolkit/query/react'
import baseQuery from './baseQuery'

const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery,
  endpoints: build => ({
    reqUserInfo: build.query({
      query: _ => '/v1_0/user/profile'
    })
  })
})
export const { useReqUserInfoQuery } = userApi

export default userApi
