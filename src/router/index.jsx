import { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { Spin } from 'antd'
import NeedAuth from '@/components/NeedAuth'

const Layout = lazy(_ => import(/* webpackChunkName: "Goods" */ '@/pages/Layout'))
const Login = lazy(_ => import(/* webpackChunkName: "Goods" */ '@/pages/Login'))
const Home = lazy(_ => import(/* webpackChunkName: "Goods" */ '@/pages/Home'))
const Article = lazy(_ => import(/* webpackChunkName: "Goods" */ '@/pages/Article'))
const Publish = lazy(_ => import(/* webpackChunkName: "Goods" */ '@/pages/Publish'))
const Notfound = lazy(_ => import(/* webpackChunkName: "Goods" */ '@/pages/404'))

const routes = [
  {
    path: '/',
    element: <NeedAuth><Layout></Layout></NeedAuth>,
    children: [
      {
        path: '',
        element: <Home></Home>
      },
      {
        path: 'home/list',
        element: <Article></Article>
      },
      {
        path: 'home/publish',
        element: <Publish></Publish>
      },
      {
        path: 'home/publish/:id',
        element: <Publish></Publish>
      }
    ]
  },
  {
    path: 'login',
    element: <Login></Login>
  },
  {
    path: '*',
    element: <Notfound></Notfound>
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
