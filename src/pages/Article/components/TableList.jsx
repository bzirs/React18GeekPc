import { useDelArticleMutation, useReqArticleListQuery } from '@/store/api/modules/articles'
import { setArticleList, setArticleRqe } from '@/store/reducers/modules/articles'
import { Table, Card, Image, Tag, Space, Button } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import img from '@/assets/error.png'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { STATUS } from '@/constant'
import Popconfirm from 'antd/lib/popconfirm'
import { useNavigate } from 'react-router-dom'

const TableList = props => {
  // 删除文章接口
  const [delFn] = useDelArticleMutation()

  const navigate = useNavigate()
  // 表格配置
  const columns = [
    {
      title: '封面',
      dataIndex: 'name',
      render (_, { cover }) {
        if (cover.type) {
        // 有图片
          return <Image width={200} height={150} src={cover.images[0]}></Image>
        } else {
        // 无图片
          return <Image width={200} height={150} src={img}></Image>
        }
      }
    },
    {
      title: '标题',
      dataIndex: 'title'
    },
    {
      title: '状态',
      dataIndex: 'status',
      render (_, record) {
        const { status } = record
        const { color, title } = STATUS.find(t => t.id === status)
        return <Tag color={color}>{title}</Tag>
      }
    },
    {
      title: '发布时间',
      dataIndex: 'pubdate'
    },
    {
      title: '阅读数',
      dataIndex: 'read_count'
    },
    {
      title: '评论数',
      dataIndex: 'comment_count'
    },
    {
      title: '点赞数',
      dataIndex: 'like_count'
    },
    {
      title: '操作',
      render: (_, { id }) => (
      <Space size='middle'>
        <Button type='primary' shape='circle' onClick={_ => navigate(`/home/publish/${id}`)} icon={<EditOutlined />} />
        <Popconfirm title='确定要删除该文章吗？' onConfirm={_ => confirm(id)} okText='确定' cancelText='取消'>
          <Button danger type='primary' shape='circle' icon={<DeleteOutlined />} />
        </Popconfirm>
      </Space>
      )
    }
  ]

  // 删除文章
  const confirm = (id) => {
    delFn(id)
  }

  // 文章通过从store中读取出请求对象 进行请求
  // 读取store文章列表
  const { articles, params } = useSelector(({ article }) => article)
  // 获取文章列表
  const { data } = useReqArticleListQuery(params)

  const { results, total_count: total, page: current, per_page: pageSize } = articles || {}

  // 派发器
  const dispatch = useDispatch()

  useEffect(
    _ => {
      dispatch(setArticleList(data?.data))
    },
    [data]
  )

  const onChange = e => {
    console.log(e)
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
