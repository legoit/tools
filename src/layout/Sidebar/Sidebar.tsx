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
        <div className="font-sans">
          <div className="border rounded overflow-hidden flex">
            <input type="text" className="px-4 py-2 border" placeholder="Search..." />
            <button className="flex items-center justify-center px-4 border-l border" type="button">
              <svg className="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
              </svg>
            </button>
          </div>
        </div>
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
