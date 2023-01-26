
import { createApi } from '@reduxjs/toolkit/query/react'

import baseQuery from '../baseQuery'

const articlesApi = createApi({
  reducerPath: 'channelsApi',
  baseQuery,
  // 数据标签
  tagTypes: ['articleList'], // 指定api中的标签类型 可以传回调函数返回数组 数组内可以传对象
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
      }),
      keepUnusedDataFor: 0,
      providesTags: ['articleList'] // 当标签失效后就会触发重新请求,多个标签触发一个就会重新请求
    }),
    /**
     * @description 添加文章
     */
    addChannel: bulid.mutation({
      query: (body, draft = false) => ({
        url: '/v1_0/mp/articles',
        method: 'post',
        body,
        params: {
          draft
        }
      })
    }),

    delArticle: bulid.mutation({
      /**
       * @description 删除文章
       * @param {*} target
       * @returns
       */
      query: target => ({
        url: `/v1_0/mp/articles/${target}`,
        method: 'delete'
      }),
      invalidatesTags: ['articleList'] // 使标签失效
    })

  })
})

export const { useReqChannelsListQuery, useReqArticleListQuery, useDelArticleMutation, useAddChannelMutation } = articlesApi

export default articlesApi
