import { Card } from 'antd'
import Styles from './index.module.scss'

import logo from '@/assets/logo.png'
const Login = () => {
  return (
    <div className={Styles.root}>
      <Card className='login-container'>
        <img className='login-logo' src={logo} alt='' />
        {/* 登录表单 */}
      </Card>
    </div>
  )
}

export default Login
