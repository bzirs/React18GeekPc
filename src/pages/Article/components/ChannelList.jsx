import { Select, Form } from 'antd'
import { useSelector } from 'react-redux'

const ChannelList = () => {
  // 获取频道列表
  const { channels } = useSelector(({ article }) => article)
  console.log(channels)

  const options = channels?.map(t => ({ label: t.name, value: t.id }))
  const handleChange = e => {
    console.log(e)
  }
  return (
    <Form.Item label='频道'>
      <Select
        defaultValue='请选择频道'
        style={{ width: 120 }}
        onChange={handleChange}
        options={options}
      />
    </Form.Item>
  )
}

export default ChannelList
