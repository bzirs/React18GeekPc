
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
    // 获取文章列表
    reqArticleList: bulid.query({
      query: params => ({
        url: '/v1_0/mp/articles',
        method: 'get',
        params
      })
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

export const { useReqChannelsListQuery, useReqArticleListQuery } = articlesApi

export default articlesApi
