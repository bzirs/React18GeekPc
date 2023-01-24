import { createSlice } from '@reduxjs/toolkit'

const tokenSlice = createSlice({
  name: 'tokenSlice',
  initialState: {
    token: '',
    refresh_token: ''
  },
  reducers: {
    setToken: (state, { payload }) => {
      console.log(payload)
      state.token = payload.token
      state.refresh_token = payload.refresh_token
    }
  }
})

export const { setToken } = tokenSlice.actions

export default tokenSlice.reducer
