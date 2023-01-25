import { Layout } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
const { Header } = Layout

const MyHeader = () => {
  const userInfo = useSelector(({ userInfo }) => userInfo)
  console.log(userInfo)
  return (
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
  )
}

export default MyHeader
