import React, { useEffect } from 'react'
import { Card, Breadcrumb, Form, Button, Radio, DatePicker } from 'antd'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { useReqChannelsListQuery } from '@/store/api/modules/articles'
import { useDispatch } from 'react-redux'
import { setChannels } from '@/store/reducers/modules/articles'
import ChannelList from './components/ChannelList'
import TableList from './components/TableList'
const { RangePicker } = DatePicker

const Article = () => {
  // 请求频道列表
  const { data } = useReqChannelsListQuery()

  const channels = data?.data?.channels

  // 派发器
  const dispatch = useDispatch()

  useEffect(
    _ => {
      dispatch(setChannels(channels))
    },
    [channels]
  )

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
        {/* 筛选 */}
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

          <ChannelList></ChannelList>

          <Form.Item label='日期'>
            <RangePicker />
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit'>
              筛选
            </Button>
          </Form.Item>
        </Form>
        {/* 表格 */}
        <TableList></TableList>
      </Card>
    </div>
  )
}

export default Article
