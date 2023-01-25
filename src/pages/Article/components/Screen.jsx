import { STATUS } from '@/constant'
import { Form, Button, Radio, DatePicker } from 'antd'
import ChannelList from './ChannelList'
const { RangePicker } = DatePicker

const Screen = props => {
  // 单选列表
  const radioList = STATUS.map(t => (
    <Radio key={t.id} value={t.id}>
      {t.title}
    </Radio>
  ))

  // 收集表单数据
  const onFinish = values => {
    const params = {}
    if (values.status !== -1) {
      params.status = values.status
    }

    params.channel_id = values.channel_id
    if (values.date) {
      params.begin_pubdate = values.date[0]
        .startOf('day')
        .format('YYYY-MM-DD HH:mm:ss')
      params.end_pubdate = values.date[1]
        .endOf('day')
        .format('YYYY-MM-DD HH:mm:ss')
    }

    console.log(params)
  }

  // const obj = { status: -1, channel_id: 0, date: new Date() }
  return (
    <Form initialValues={{ status: -1, channel_id: 0, date: [] }} onFinish={onFinish}>
      <Form.Item name='status' label='状态'>
        <Radio.Group>{radioList}</Radio.Group>
      </Form.Item>

      {/* 频道列表 */}
    <ChannelList></ChannelList>

      <Form.Item label='日期' name='date'>
        <RangePicker />
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit'>
          筛选
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Screen
