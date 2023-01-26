import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'
import { Card, Breadcrumb, Form, Input, Button, Space, Radio, Upload, message } from 'antd'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { PlusOutlined } from '@ant-design/icons'
import ChannelList from '@/components/ChannelList'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { baseUrl } from '@/store/api/baseQuery'
import { useAddChannelMutation, useEditArticleMutation, useLoadArticleInfoQuery } from '@/store/api/modules/articles'

const Publish = props => {
  // 获取路径参数
  const { id } = useParams()

  // 图片链接列表
  const [fileList, setFileList] = useState([])

  // 控制type属性
  const [type, setType] = useState(1)

  // 获取文章详情
  const { data } = (id && useLoadArticleInfoQuery(id)) || {}

  const formRef = useRef()

  // 路由
  const navigate = useNavigate()

  // 添加文章
  const [addArticleFn] = useAddChannelMutation()

  // 编辑文章
  const [editArticleFn] = useEditArticleMutation()

  useEffect(_ => {
    console.log(id, data)
    const articleInfo = data?.data
    if (id && articleInfo) {
      console.log('文章详情', articleInfo)

      const article = {
        type: articleInfo?.cover.type, // 图片类型
        content: articleInfo.content,
        channel_id: articleInfo.channel_id,
        title: articleInfo.title
      }
      // 设置图片类型 让添加图片部分显示隐藏
      setType(articleInfo?.cover.type)

      formRef.current.setFieldsValue(article)
      // 按upload组件的要求对封面进行转换
      setFileList(articleInfo.cover.images.map((img) => ({ url: img }))) // 显示封面图片
    }
  }, [data, id])

  const subMit = ({ type, ...rest }, draft = false) => {
    // 说明：如果选择 3 图，图片数量必须是 3 张，否则，后端会当做单图处理
    //      后端根据上传图片数量，来识别是单图或三图
    // eslint-disable-next-line no-use-before-define
    if (type === 3 && fileList.length !== 3) return message.warning('封面数量不为3张')
    const images = fileList.map((item) => {
      if (item.url) {
        return item.url
      } else {
        return item.response.data.url
      }
    })

    const data = {
      ...rest,
      // 注意：接口会按照上传图片数量来决定单图 或 三图
      cover: {
        type,
        images
      }
    }
    console.log(id)
    id ? editArticleFn({ body: data, target: id, draft }) : addArticleFn(data, draft)
    message.success('文章添加成功', 1, _ => {
      navigate('/home/list')
    })
  }

  // 存储图片列表
  const fileRef = useRef(fileList)

  const onTypeChange = e => {
    const count = e.target.value
    setType(count)
    setFileList(fileRef.current.slice(0, count))
  }

  const onChange = ({ fileList }) => {
    setFileList(fileList)
    fileRef.current = fileList
  }

  const addDraft = async () => {
    const values = await formRef.current.validateFields()
    subMit(values, true)
  }

  const flagTitle = id ? '编辑' : '发布'

  return (
    <div className={styles.root}>
      <Card
        title={
          <Breadcrumb separator='>'>
            <Breadcrumb.Item>
              <Link to='/home'>首页</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{flagTitle}文章</Breadcrumb.Item>
          </Breadcrumb>
        }>
        <Form ref={formRef} onFinish={subMit} initialValues={{ type: 1, channel_id: 0 }} labelCol={{ span: 4 }} wrapperCol={{ span: 20 }} size='large'>
          <Form.Item
            name='title'
            label='标题'
            rules={[
              {
                required: true,
                message: '标题不能为空'
              }
            ]}>
            <Input placeholder='请输入文章的标题' style={{ width: 400 }}></Input>
          </Form.Item>
          {/* 频道 */}
          <Form.Item
            label='频道'
            name='channel_id'
            rules={[
              {
                required: true,
                message: '频道不能为空'
              }
            ]}>
            <ChannelList></ChannelList>
          </Form.Item>
          <Form.Item
            name='type'
            label='封面'
            rules={[
              {
                validator (_, value) {
                  if (fileList.length !== value) {
                    return Promise.reject(new Error(`请上传${value}张图片`))
                  } else {
                    return Promise.resolve()
                  }
                }
              }
            ]}>
            <Radio.Group onChange={onTypeChange}>
              <Radio value={1}>单图</Radio>
              <Radio value={3}>三图</Radio>
              <Radio value={0}>无图</Radio>
            </Radio.Group>
          </Form.Item>
          {type !== 0 && (
            <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
              {/* action: 上传的地址
                name: 上传的文件的名字 默认file
                fileList: 控制上传的图片,做回填 */}
              <Upload action={`${baseUrl}/v1_0/upload`} maxCount={type} name='image' listType='picture-card' onChange={onChange} fileList={fileList}>
                <PlusOutlined />
              </Upload>
            </Form.Item>
          )}
          <Form.Item
            name='content'
            label='内容'
            rules={[
              {
                required: true,
                message: '内容不能为空'
              }
            ]}>
            <ReactQuill></ReactQuill>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
            <Space>
              <Button type='primary' htmlType="submit">{flagTitle}文章</Button>
              <Button onClick={addDraft}>存入草稿</Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Publish
