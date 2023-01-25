import React, { useEffect } from 'react'
import { Layout, Menu, message } from 'antd'
import { delToken } from '@/store/reducers/token'
import { delUserInfo, setUserInfo } from '@/store/reducers/user'
import { HomeOutlined, DiffOutlined, EditOutlined } from '@ant-design/icons'
import styles from './index.module.scss'
import { SIDER_LIST } from '@/constant'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import { useReqUserInfoQuery } from '@/store/api/user'
import { useDispatch } from 'react-redux'
import MyHeader from './components/Header'
const { Content, Sider } = Layout

// 侧边栏
const siderList = [HomeOutlined, DiffOutlined, EditOutlined].map((t, i) => ({
  key: SIDER_LIST[i].id,
  icon: React.createElement(t),
  label: <Link to={SIDER_LIST[i].link}>{SIDER_LIST[i].label}</Link>
}))

const MyLayout = () => {
  // 获取用户信息
  const res = useReqUserInfoQuery()
  const { data: userInfo, isSuccess, error } = res

  // 派发器
  const dispatch = useDispatch()

  // nav跳转
  const navigate = useNavigate()

  useEffect(
    _ => {
      isSuccess && dispatch(setUserInfo(userInfo?.data))
    },
    [userInfo]
  )

  useEffect(_ => {
    if (error?.status === 401) {
      message.error('身份过期，请重新登录')

      // 删除token 已经用户信息
      dispatch(delToken())
      dispatch(delUserInfo())
      // 跳转
      navigate('/')

      delete res.error
    }
  }, [error])

  return (
    <div className={styles.root}>
      <Layout>
        <MyHeader></MyHeader>
        <Layout>
          <Sider width={200} className='site-layout-background'>
            <Menu theme='dark' mode='inline' items={siderList} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }}></Menu>
          </Sider>
          <Layout style={{ padding: '24px 24px' }}>
            <Content className='site-layout-background'>
              {/* 路由嵌套 二级路由 */}
              <Outlet></Outlet>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  )
}

export default MyLayout
