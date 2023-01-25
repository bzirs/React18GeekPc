import React from 'react'
import { Layout, Menu } from 'antd'

// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined, LogoutOutlined
} from '@ant-design/icons'
import styles from './index.module.scss'
import { SIDER_LIST } from '@/constant'
// const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

// 侧边栏
const siderList = [
  HomeOutlined,
  DiffOutlined,
  EditOutlined
].map((t, i) => ({
  key: SIDER_LIST[i].id,
  icon: React.createElement(t),
  label: SIDER_LIST[i].label
})
)

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
            <Menu theme='dark' mode='inline' items={siderList} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }}>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              className='site-layout-background'
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280
              }}>
              Content
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  )
}

export default MYLayout
