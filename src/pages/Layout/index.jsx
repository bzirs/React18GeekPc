import React, { useEffect } from 'react'
import { Layout, Menu } from 'antd'

// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons'
import { HomeOutlined, DiffOutlined, EditOutlined } from '@ant-design/icons'
import styles from './index.module.scss'
import { SIDER_LIST } from '@/constant'
import { Outlet, Link } from 'react-router-dom'
import { useReqUserInfoQuery } from '@/store/api/user'
import { useDispatch } from 'react-redux'
import { setUserInfo } from '@/store/reducers/user'
import MyHeader from './components/Header'

// const { SubMenu } = Menu
const { Content, Sider } = Layout

// 侧边栏
const siderList = [HomeOutlined, DiffOutlined, EditOutlined].map((t, i) => ({
  key: SIDER_LIST[i].id,
  icon: React.createElement(t),
  label: <Link to={SIDER_LIST[i].link}>{SIDER_LIST[i].label}</Link>
}))

const MyLayout = () => {
  // 获取用户信息
  const { data: userInfo, isSuccess } = useReqUserInfoQuery()

  const dispatch = useDispatch()

  useEffect(
    _ => {
      isSuccess && dispatch(setUserInfo(userInfo?.data))
    },
    [userInfo]
  )

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
