import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const NeedAuth = (props) => {
  const { token } = useSelector(({ token }) => token)

  // eslint-disable-next-line react/prop-types
  return token.length ? props.children : <Navigate to='/login'></Navigate>
}

export default NeedAuth
