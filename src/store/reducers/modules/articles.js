import { createSlice } from '@reduxjs/toolkit'

const articlesSlice = createSlice({
  name: 'channelsSlice',
  initialState: _ => ({
    channels: []
  }),
  reducers: {
    // 设置频道列表
    setChannels (state, { payload }) {
      state.channels = payload
    }
  }
})

export const { setChannels } = articlesSlice.actions

export default articlesSlice.reducer
