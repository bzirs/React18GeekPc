import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    userInfo: null
  },
  reducers: {
    setUserInfo (state, { payload }) {
      state.userInfo = payload
    }
  }
})

export const { setUserInfo } = userSlice.actions

export default userSlice.reducer
