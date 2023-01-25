import { Table, Card } from 'antd'

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
  }
]

const columns = [
  {
    title: '封面',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '标题',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: '状态',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: '发布时间',
    dataIndex: 'address'
  },
  {
    title: '阅读数',
    dataIndex: 'address'
  },
  {
    title: '评论数',
    dataIndex: 'address'
  },
  {
    title: '点赞数',
    dataIndex: 'address'
  },
  {
    title: '操作',
    dataIndex: 'address'
  }
]

const TableList = props => {
  return (
    <Card title='根据筛选条件共查询到xxx条结果:' style={{ marginTop: 10 }}>
      <Table dataSource={dataSource} columns={columns} />
    </Card>
  )
}

export default TableList
