export const SIDER_LIST = [
  {
    id: 1,
    label: '数据概览',
    link: '/'
  },
  {
    id: 2,
    label: '内容管理',
    link: '/home/list'
  },
  {
    id: 3,
    label: '发布文章',
    link: '/home/publish'
  }
]

// 表格头
export const columns = [
  {
    title: '封面',
    dataIndex: 'name'
  },
  {
    title: '标题',
    dataIndex: 'title'
  },
  {
    title: '状态',
    dataIndex: 'status'
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
    title: '操作'
  }
]
