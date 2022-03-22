import React, { FC, useState } from 'react'
import { Menu, Input } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import SplitPane from 'react-split-pane'

type IRoute = {
  title: string
  path: string
  icon?: React.FC<React.SVGProps<SVGSVGElement>>
}

const routes: IRoute[] = [
  {
    title: 'XML',
    path: '/xml',
  },
  {
    title: 'JSON',
    path: '/json',
  },
  {
    path: '/html2jsx',
    title: 'HTML to JSX',
  },
  {
    path: '/url-parser',
    title: 'URL Parser',
  },
]

export const Sidebar: FC = () => {
  const router = useRouter()

  return (
    <div>
      <div className="p-4 border-b border-b-gray-100">
        <Input.Search placeholder="Filter traits..." />
      </div>
      <div className="mt-2 overflow-y-auto rounded">
        <Menu defaultSelectedKeys={[router.pathname]}>
          {routes.map((route) => {
            return (
              <Menu.Item key={route.path} icon={route.icon}>
                <Link href={route.path}>
                  <a>{route.title}</a>
                </Link>
              </Menu.Item>
            )
          })}
        </Menu>
      </div>
    </div>
  )
}

export const Layout: FC = ({ children }) => {
  const [sashes, setSashes] = useState([280, 0, 240])
  const handleChange = (index: number, size: number) => {
    // console.log(index, size)
  }

  return (
    <SplitPane
      split="vertical"
      minSize={280}
      maxSize={420}
      defaultSize={280}
      className="primary"
      onChange={(size: number) => handleChange(0, size)}
    >
      <Sidebar />

      <div>
        <SplitPane split="vertical" size="80%">
          <div>{children}</div>
          <div />
        </SplitPane>
      </div>
    </SplitPane>
  )
}
