import channelsApi from './modules/articles'
import loginApi from './modules/login'
import userApi from './modules/user'

export const apiReducer = {

  [loginApi.reducerPath]: loginApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [channelsApi.reducerPath]: channelsApi.reducer
}

export const middleware = (getDefaultMiddleware) => getDefaultMiddleware().concat(loginApi.middleware, userApi.middleware, channelsApi.middleware)
