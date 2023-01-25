import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    userInfo: null
  },
  reducers: {
    setUserInfo (state, { payload }) {
      state.userInfo = payload
    },
    delUserInfo (state, action) {
      state.userInfo = null
    }
  }
})

export const { setUserInfo, delUserInfo } = userSlice.actions

export default userSlice.reducer
