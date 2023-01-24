import { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { Spin } from 'antd'
const Layout = lazy(_ => import(/* webpackChunkName: "Goods" */ '../pages/Layout'))
const Login = lazy(_ => import(/* webpackChunkName: "Goods" */ '../pages/Login'))

const routes = [
  {
    path: '/',
    element: <Layout></Layout>
  },
  {
    path: '/login',
    element: <Login></Login>
  }
]

// 配置加载页面居中
const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '300px'
}

const Routes = () => {
  const elements = useRoutes(routes) // 读取路由数据
  // 加载画面 Suspense在用户等待的时候显示
  return <Suspense fallback={<Spin size='large' style={style} />}>{elements}</Suspense>
}

export default Routes
