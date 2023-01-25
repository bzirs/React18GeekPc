import React, { useEffect } from 'react'
import { Card, Breadcrumb } from 'antd'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { useReqChannelsListQuery } from '@/store/api/modules/articles'
import { useDispatch } from 'react-redux'
import { setChannels } from '@/store/reducers/modules/articles'
import TableList from './components/TableList'
import Screen from './components/Screen'

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
        <Screen></Screen>
        {/* 表格 */}
        <TableList></TableList>
      </Card>
    </div>
  )
}

export default Article
