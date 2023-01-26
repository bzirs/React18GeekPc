import React from 'react'
import styles from './index.module.scss'
import { Card, Breadcrumb, Form, Input, Button, Space, Radio } from 'antd'
import { Link } from 'react-router-dom'
import ChannelList from '@/components/ChannelList'

const Publish = props => {
  const onChange = e => {
    console.log(e)
  }
  const value = ''

  return (
    <div className={styles.root}>
      <Card
        title={
          <Breadcrumb separator='>'>
            <Breadcrumb.Item>
              <Link to='/home'>首页</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>发布文章</Breadcrumb.Item>
          </Breadcrumb>
        }>
        <Form labelCol={{ span: 4 }} wrapperCol={{ span: 20 }} size='large'>
          <Form.Item label='标题'>
            <Input placeholder='请输入文章的标题' style={{ width: 400 }}></Input>
          </Form.Item>
          {/* 频道 */}
          <ChannelList></ChannelList>
          <Form.Item label='封面'>
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>A</Radio>
              <Radio value={2}>B</Radio>
              <Radio value={3}>C</Radio>
              <Radio value={4}>D</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label='内容'></Form.Item>
          <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
            <Space>
              <Button type='primary'>发布文章</Button>
              <Button>存入草稿</Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Publish
