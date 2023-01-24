import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { apiReducer, middleware } from './api'
import { reducers } from './reducers'

const store = configureStore({
  reducer: {
    ...reducers,
    ...apiReducer
  },
  middleware
})

setupListeners(store.dispatch)

export default store
