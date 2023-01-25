import { createApi } from '@reduxjs/toolkit/query/react'
import baseQuery from './baseQuery'

const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery,
  endpoints: build => ({
    reqUserInfo: build.query({
      query: _ => '/v1_0/user/profile',
      // 由于rtkq有缓存功能,同样的请求默认在60秒内再次调用会从缓存中提取当判断401成功后就不能有缓存
      keepUnusedDataFor: 0
    })
  })
})
export const { useReqUserInfoQuery } = userApi

export default userApi
