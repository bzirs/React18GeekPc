import { Image, Tag } from 'antd'

import img from '@/assets/error.png'

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

// 状态
export const STATUS = [
  { id: -1, title: '全部', color: 'magenta' },
  { id: 0, title: '草稿', color: 'red' },
  { id: 1, title: '待审核', color: 'volcano' },
  { id: 2, title: '审核通过', color: 'lime' },
  { id: 3, title: '审核失败', color: 'gold' }
]

// 表格头
export const columns = [
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
    title: '操作'
  }
]
