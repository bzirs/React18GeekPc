import { useEffect } from 'react'
import { useReqChannelsListQuery } from '@/store/api/modules/articles'
import { useDispatch } from 'react-redux'
import { setChannels } from '@/store/reducers/modules/articles'

const useChannels = () => {
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
  return channels
}

export default useChannels
