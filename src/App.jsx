import 'antd/dist/reset.css'
import useChannels from './hooks/useChannels'
import Routes from './router'

const App = prps => {
  // 获取频道列表
  useChannels()

  return <Routes></Routes>
}

export default App
