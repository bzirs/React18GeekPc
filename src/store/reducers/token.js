import { getStorageToken, setStorageToken } from '@/utils/storage'
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
      console.log(payload)
      state.token = payload.token
      state.refresh_token = payload.refresh_token

      // 本地持久化
      setStorageToken(payload)
    }
  }
})

export const { setToken } = tokenSlice.actions

export default tokenSlice.reducer
