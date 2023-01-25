import React from 'react'
import { Layout, Menu } from 'antd'

// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons'
import { HomeOutlined, DiffOutlined, EditOutlined, LogoutOutlined } from '@ant-design/icons'
import styles from './index.module.scss'
import { SIDER_LIST } from '@/constant'
import { Outlet, Link } from 'react-router-dom'

// const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

// 侧边栏
const siderList = [HomeOutlined, DiffOutlined, EditOutlined].map((t, i) => ({
  key: SIDER_LIST[i].id,
  icon: React.createElement(t),
  label: <Link to={SIDER_LIST[i].link}>{SIDER_LIST[i].label}</Link>
}))

const MYLayout = () => {
  return (
    <div className={styles.root}>
      <Layout>
        <Header className='header'>
          <div className='logo' />
          <div className='profile'>
            <span>黑马先锋</span>
            <span>
              <LogoutOutlined />
              退出
            </span>
          </div>
        </Header>
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

export default MYLayout
