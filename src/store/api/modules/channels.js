
import { createApi } from '@reduxjs/toolkit/query/react'

import baseQuery from '../baseQuery'

const channelsApi = createApi({
  reducerPath: 'channelsApi',
  baseQuery,
  endpoints: bulid => ({
    reqChannelsList: bulid.query({
      query: params => ({
        url: '/v1_0/mp/articles',
        params
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

export const { useReqChannelsListQuery } = channelsApi

export default channelsApi
