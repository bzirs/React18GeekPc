import { useSelector } from 'react-redux'
import { useLocation, Navigate } from 'react-router-dom'

const NeedAuth = (props) => {
  const { token } = useSelector(({ token }) => token)

  // 获取当前路由信息
  const state = useLocation()

  // 通过state传递给login页实现页面回跳
  // eslint-disable-next-line react/prop-types
  return token.length ? props.children : <Navigate to='/login' state={state}></Navigate>
}

export default NeedAuth
