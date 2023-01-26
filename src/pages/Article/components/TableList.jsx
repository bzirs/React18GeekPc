import { columns } from '@/constant'
import { useReqArticleListQuery } from '@/store/api/modules/articles'
import { setArticleList, setArticleRqe } from '@/store/reducers/modules/articles'
import { Table, Card } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const TableList = props => {
  // 文章通过从store中读取出请求对象 进行请求
  // 读取store文章列表
  const { articles, params } = useSelector(({ article }) => article)
  // 获取文章列表
  const { data } = useReqArticleListQuery(params)

  const {
    results, total_count: total, page: current, per_page: pageSize
  } = articles || {}

  // 派发器
  const dispatch = useDispatch()

  useEffect(_ => {
    dispatch(setArticleList(data?.data))
  }, [data])

  const onChange = e => {
    dispatch(setArticleRqe({ ...params, page: e }))
  }

  // 分页设置的对象
  const obj = {
    pageSize, // 每页多少条
    current, // 当前几页
    total, // 总条数
    onChange // 改了页码，一页几条，就会触发
  }

  return (
    <Card style={{ marginTop: 10 }}>
      <Table pagination={obj} rowKey='id' dataSource={results} columns={columns} />
    </Card>
  )
}

export default TableList
