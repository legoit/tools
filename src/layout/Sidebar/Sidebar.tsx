import { FC } from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'

const { Sider, Content } = Layout

const routes = [
  {
    title: 'XML',
    path: '/xml'
  },
  {
    title: 'JSON',
    path: '/json'
  },
  {
    path: '/html2jsx',
    title: 'HTML to JSX'
  },
  {
    path: '/url-parser',
    title: 'URL Parser'
  }
]

export const Sidebar: FC = ({ children }) => {
  return (
    <Layout>
      <Sider theme="light">
        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
          {routes.map((route) => {
            return (
              <Menu.Item key={route.path}>
                <Link className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md " to={route.path}>
                  <span className="mx-4 font-medium">{route.title}</span>
                </Link>
              </Menu.Item>
            )
          })}
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ padding: 16 }}>{children}</Content>
      </Layout>
    </Layout>
  )
}
