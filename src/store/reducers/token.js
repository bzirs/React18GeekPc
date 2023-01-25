import { getStorageToken, removeStorageToken, setStorageToken } from '@/utils/storage'
import { createSlice } from '@reduxjs/toolkit'

const authObj = JSON.parse(getStorageToken())

const tokenSlice = createSlice({
  name: 'tokenSlice',
  initialState: {
    token: authObj?.token || '',
    refresh_token: authObj?.refresh_token || ''
  },
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload.token
      state.refresh_token = payload.refresh_token

      // 本地持久化
      setStorageToken(payload)
    },
    delToken (state, { payload }) {
      state.token = ''
      state.refresh_token = ''
      console.log(state)

      // 删除本地token
      removeStorageToken()
    }
  }
})

export const { setToken, delToken } = tokenSlice.actions

export default tokenSlice.reducer
