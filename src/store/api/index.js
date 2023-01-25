import loginApi from './login'
import userApi from './user'

export const apiReducer = {

  [loginApi.reducerPath]: loginApi.reducer,
  [userApi.reducerPath]: userApi.reducer
}

export const middleware = (getDefaultMiddleware) => getDefaultMiddleware().concat(loginApi.middleware, userApi.middleware)
