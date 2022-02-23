import { FC } from 'react'
import { Layout, Menu, Input } from 'antd'
import { Link } from 'react-router-dom'
import XMLIcon from '../../xml/icon.svg'

const { Sider, Content } = Layout

const routes = [
  {
    title: 'XML',
    path: '/xml',
    icon: XMLIcon
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
      <Sider theme="light" width={280} style={{ borderRight: '1px solid #dcdcdc', background: '#e5e2e3' }}>
        <div>
          <div className="p-4 border-b">
            <Input.Search placeholder="Filter traits..." />
          </div>
          <div className="mt-2 overflow-y-auto rounded">
            <ul>
              {routes.map((route) => {
                return (
                  <li>
                    <Link
                      to={route.path}
                      className="flex items-center px-4 p-1 font-normal text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {route.icon ? (
                        <img
                          src={route.icon}
                          alt=""
                          className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        />
                      ) : (
                        <svg
                          className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                        </svg>
                      )}
                      <span className="ml-3 text-sm">{route.title}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Sider>
      <Layout>
        <Content className="p-4" style={{ background: '#e9e9e9' }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}
