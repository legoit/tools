import React, { FC, useState } from 'react'
import { Input } from 'antd'
import Link from 'next/link'
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
  return (
    <div>
      <div className="p-4 border-b border-b-gray-100">
        <Input.Search placeholder="Filter traits..." />
      </div>
      <div className="mt-2 overflow-y-auto rounded">
        <ul>
          {routes.map((route) => {
            return (
              <li key={route.path}>
                <Link href={route.path}>
                  <a className="flex items-center px-4 p-2 font-normal text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    {route.icon ? (
                      <route.icon className="w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                    ) : null}
                    <span className="ml-3 text-xs">{route.title}</span>
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
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
