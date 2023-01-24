import { Card, Button, Checkbox, Form, Input } from 'antd'
import Styles from './index.module.scss'
import logo from '@/assets/logo.png'

const Login = () => {
  return (
    <div className={Styles.root}>
      <Card className='login-container'>
        <img className='login-logo' src={logo} alt='' />
        {/* 登录表单 */}
        <Form autoComplete='off' size='large'>
          <Form.Item>
            <Input placeholder='请输入手机号' />
          </Form.Item>

          <Form.Item>
            <Input placeholder='请输入验证码' />
          </Form.Item>

          <Form.Item>
            <Checkbox>我已阅读并同意[隐私条款]和[用户协议]</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit' block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login
