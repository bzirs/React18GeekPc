import React, { useRef, useState } from 'react'
import styles from './index.module.scss'
import { Card, Breadcrumb, Form, Input, Button, Space, Radio, Upload } from 'antd'
import { Link } from 'react-router-dom'
import { PlusOutlined } from '@ant-design/icons'
import ChannelList from '@/components/ChannelList'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { baseUrl } from '@/store/api/baseQuery'

const Publish = props => {
  // 图片链接列表
  const [fileList, setFileList] = useState([])
  // 控制type属性
  const [type, setType] = useState(1)

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

  return (
    <div className={styles.root}>
      <Card
        title={
          <Breadcrumb separator='>'>
            <Breadcrumb.Item>
              <Link to='/home'>首页</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>发布文章</Breadcrumb.Item>
          </Breadcrumb>
        }>
        <Form initialValues={{ type: 1, channel_id: 0 }} labelCol={{ span: 4 }} wrapperCol={{ span: 20 }} size='large'>
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
          {fileList.length <= type && (
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
              <Button type='primary'>发布文章</Button>
              <Button>存入草稿</Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Publish
