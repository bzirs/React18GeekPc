import { createSlice } from '@reduxjs/toolkit'

const articlesSlice = createSlice({
  name: 'channelsSlice',
  initialState: _ => ({
    channels: [],
    articles: [],
    params: {}
  }),
  reducers: {
    // 设置频道列表
    setChannels (state, { payload }) {
      state.channels = payload
    },
    /**
     * @description 设置文章列表
     * @param {*} state
     * @param {*} param1
     */
    setArticleList (state, { payload }) {
      state.articles = payload
    },
    /**
     * @description 修改请求参数
     * @param {*} state
     * @param {*} param1
     */
    setArticleRqe (state, { payload }) {
      state.params = payload
    }
  }
})

export const { setChannels, setArticleList, setArticleRqe } = articlesSlice.actions

export default articlesSlice.reducer
