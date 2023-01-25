import { Layout, message, Popconfirm } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { delToken } from '@/store/reducers/modules/token'
import { delUserInfo } from '@/store/reducers/modules/user'
import { useNavigate } from 'react-router-dom'

const { Header } = Layout

const MyHeader = () => {
  // 从store中拿出用户信息
  const { userInfo } = useSelector(({ userInfo }) => userInfo)

  // 气泡框标题
  const text = '真滴要退出吗?'

  // 派发器
  const dispatch = useDispatch()

  // nav跳转
  const navigate = useNavigate()

  // 退出
  const confirm = () => {
    message.success('退出成功', 1)

    // 删除token 已经用户信息
    dispatch(delToken())
    dispatch(delUserInfo())
    // 跳转
    navigate('/login', { replace: true })
  }

  return (
    <Header className='header'>
      <div className='logo' />
      <div className='profile'>
        <span>{userInfo?.name}</span>

        <Popconfirm placement='bottomRight' title={text} onConfirm={confirm} okText='确定' cancelText='取消'>
          <span>
            <LogoutOutlined />
            退出
          </span>
        </Popconfirm>
      </div>
    </Header>
  )
}

export default MyHeader
