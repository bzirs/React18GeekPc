import { Layout } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
const { Header } = Layout

const MyHeader = () => {
  // 从store中拿出用户信息
  const { userInfo } = useSelector(({ userInfo }) => userInfo)

  return (
    <Header className='header'>
      <div className='logo' />
      <div className='profile'>
        <span>{userInfo.name}</span>
        <span>
          <LogoutOutlined />
          退出
        </span>
      </div>
    </Header>
  )
}

export default MyHeader
