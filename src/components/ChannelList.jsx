import { Select } from 'antd'
import { useSelector } from 'react-redux'

// eslint-disable-next-line react/prop-types
const ChannelList = ({ value, onChange }) => {
  // 获取频道列表
  const { channels } = useSelector(({ article }) => article)

  const options = channels?.map(t => ({ label: t.name, value: t.id }))

  //  如果formitem包裹的情况下 表单内受控组件select不能设置默认值 defaultValue
  return (
    <Select
      defaultValue={value}
        style={{ width: 120 }}
        onChange={onChange}
        options={options}
      />
  )
}

export default ChannelList
