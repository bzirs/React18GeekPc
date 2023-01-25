import { Select, Form } from 'antd'
import { useSelector } from 'react-redux'

const ChannelList = () => {
  // 获取频道列表
  const { channels } = useSelector(({ article }) => article)

  const options = channels?.map(t => ({ label: t.name, value: t.id }))
  const handleChange = e => {
    console.log(e)
  }
  return (
    <Form.Item label='频道' name='channel_id'>
      {/* 表单内受控组件select不能设置默认值 defaultValue */}
      <Select
        style={{ width: 120 }}
        onChange={handleChange}
        options={options}
      />
    </Form.Item>
  )
}

export default ChannelList
