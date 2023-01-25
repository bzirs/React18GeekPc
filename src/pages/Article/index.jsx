import React from 'react'
import { Card, Breadcrumb, Form, Button, Radio, Select, DatePicker } from 'antd'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { useReqChannelsListQuery } from '@/store/api/modules/channels'
const { RangePicker } = DatePicker

const Article = () => {
  const { data, state } = useReqChannelsListQuery()
  console.log(data, state)

  const handleChange = e => {
    console.log(e)
  }

  return (
    <div className={styles.root}>
      <Card
        title={
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to='/'>首页</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>文章列表</Breadcrumb.Item>
          </Breadcrumb>
        }>
        <Form>
          <Form.Item label='状态'>
            <Radio.Group>
              <Radio value={-1}>全部</Radio>
              <Radio value={0}>草稿</Radio>
              <Radio value={1}>待审核</Radio>
              <Radio value={2}>审核通过</Radio>
              <Radio value={3}>审核失败</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label='频道'>
            <Select
              defaultValue='lucy'
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true }
              ]}
            />
          </Form.Item>

          <Form.Item label='日期'>
            <RangePicker />
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit'>
              筛选
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Article
