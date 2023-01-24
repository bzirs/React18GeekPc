import { createSlice } from '@reduxjs/toolkit'

const tokenSlice = createSlice({
  name: 'tokenSlice',
  initialState: {
    token: '',
    refresh_token: ''
  },
  reducers: {
    setToken: (state, payload) => {
      console.log(state)
    }
  }
})

export const { setToken } = tokenSlice.actions

export default tokenSlice.reducer
