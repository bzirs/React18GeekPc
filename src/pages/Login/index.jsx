import { Card, Button, Checkbox, Form, Input } from 'antd'
import Styles from './index.module.scss'
import logo from '@/assets/logo.png'

const mobileRules = [
  { required: true, message: '请输入手机号' }, // 必须要填
  { pattern: /^(?:(?:\+|00)86)?1\d{10}$/, message: '请输入正确的手机号' }
]

const verCodeRules = [
  { len: 6, message: '验证码6个字符', validateTrigger: 'onBlur' },
  { required: true, message: '请输入验证码' }
]

const checkRules = [
  {
    validator (rule, value) {
      try {
        if (value) {
          return Promise.resolve()
        } else {
          return Promise.reject(new Error('请阅读并同意协议'))
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
]

const defaultValues = {
  agree: true,
  mobile: '13811111111',
  code: '246810'
}

const onFinish = e => {
  console.log(e)
}

const Login = () => {
  return (
    <div className={Styles.root}>
      <Card className='login-container'>
        <img className='login-logo' src={logo} alt='' />
        {/* 登录表单 */}
        <Form autoComplete='off' size='large' validateTrigger={['onBlur', 'onChange']} onFinish={onFinish} initialValues={defaultValues}>
          <Form.Item name='mobile' rules={mobileRules}>
            <Input placeholder='请输入手机号' />
          </Form.Item>

          <Form.Item name='code' rules={verCodeRules}>
            <Input placeholder='请输入验证码' maxLength={6} />
          </Form.Item>

          <Form.Item
             name="agree"
            valuePropName='checked'
            rules={checkRules}>
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
