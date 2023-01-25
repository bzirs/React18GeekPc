import { columns } from '@/constant'
import { useReqArticleListQuery } from '@/store/api/modules/articles'
import { setArticleList } from '@/store/reducers/modules/articles'
import { Table, Card } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const TableList = props => {
  // 获取文章列表
  const { data } = useReqArticleListQuery()

  // 读取store文章列表
  const { articles: dataSource } = useSelector(({ article }) => article)

  // 派发器
  const dispatch = useDispatch()

  useEffect(_ => {
    dispatch(setArticleList(data?.data.results))
  }, [data])

  return (
    <Card title='根据筛选条件共查询到xxx条结果:' style={{ marginTop: 10 }}>
      <Table rowKey='id' dataSource={dataSource} columns={columns} />
    </Card>
  )
}

export default TableList
