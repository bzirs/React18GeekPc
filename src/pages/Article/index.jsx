import React from 'react'
import { Card, Breadcrumb } from 'antd'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import TableList from './components/TableList'
import Screen from './components/Screen'

const Article = () => {
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
