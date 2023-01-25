import { Card, Button, Checkbox, Form, Input, message } from 'antd'
import Styles from './index.module.scss'
import logo from '@/assets/logo.png'
import { useDispatch } from 'react-redux'
import { useLoginMutation } from '@/store/api/login'
import { setToken } from '@/store/reducers/token'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

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

const Login = () => {
  // 消息提醒
  const [messageApi, contextHolder] = message.useMessage()

  // 按钮loading状态
  const [loadings, setLoadings] = useState(false)

  // 路由信息
  const { state } = useLocation()

  // 到哪去 记录回跳路径
  const form = state?.pathname || '/'

  // 路由跳转
  const navigate = useNavigate()

  const dispatch = useDispatch()

  // rtkq返回函数和一个状态对象
  const [login, { isError: loginError }] = useLoginMutation()

  const onFinish = async e => {
    setLoadings(prevent => !prevent)
    try {
      // console.log(e)
      // 登录
      const {
        data: { data }
      } = await login(e)

      dispatch(setToken(data))
    } catch (error) {
      console.dir(error)
    } finally {
      setLoadings(prevent => !prevent)

      messageApi.open({
        type: loginError ? 'error' : 'success',
        content: loginError ? '登录失败' : '登录成功',
        duration: 1,
        onClose: _ => {
          // 跳转路由
          loginError || navigate(form, { replace: true })
        }
      })
    }
  }

  return (
    <>
      {contextHolder}
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

            <Form.Item name='agree' valuePropName='checked' rules={checkRules}>
              <Checkbox>我已阅读并同意[隐私条款]和[用户协议]</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type='primary' htmlType='submit' block loading={loadings}>
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </>
  )
}

export default Login
