import loginApi from './login'

export const apiReducer = {

  [loginApi.reducerPath]: loginApi.reducer
}

export const middleware = (getDefaultMiddleware) => getDefaultMiddleware().concat(loginApi.middleware)
