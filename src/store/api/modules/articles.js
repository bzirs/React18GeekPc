
import { createApi } from '@reduxjs/toolkit/query/react'

import baseQuery from '../baseQuery'

const articlesApi = createApi({
  reducerPath: 'channelsApi',
  baseQuery,
  endpoints: bulid => ({
    // 获取频道列表
    reqChannelsList: bulid.query({
      query: _ => ({
        url: '/v1_0/channels'
      }),
      keepUnusedDataFor: 0
    }),
    addChannel: bulid.mutation({
      query: body => ({
        url: '/v1_0/mp/articles',
        method: 'post',
        body
      })
    })
  })
})

export const { useReqChannelsListQuery } = articlesApi

export default articlesApi
