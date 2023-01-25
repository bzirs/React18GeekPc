import articles from './modules/articles'
import tokenSlice from './modules/token'
import userSlice from './modules/user'

export const reducers = {
  token: tokenSlice,
  userInfo: userSlice,
  article: articles
}
