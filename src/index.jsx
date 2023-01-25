import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
dayjs.locale('zh-cn')

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ConfigProvider locale={zhCN}>
        <App></App>
        </ConfigProvider>
      </Router>
    </Provider>
  </React.StrictMode>
)
