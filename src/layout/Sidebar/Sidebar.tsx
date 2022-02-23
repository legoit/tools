import { FC, useState } from 'react'
import { Menu, Input } from 'antd'
import { Link } from 'react-router-dom'
import SplitPane from 'react-split-pane'
import XMLIcon from '../../xml/icon.svg'

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

// export const Sidebar: FC = ({ children }) => {
//   return (
//     <SplitPane split="vertical" minSize={280} maxSize={420} defaultSize={280} className="primary">
//       <div>min: 50px, max: 300px</div>

//       <SplitPane split="vertical" minSize="100%">
//         ???
//       </SplitPane>

//       <SplitPane split="vertical" minSize={240} maxSize={240} defaultSize={240}>
//         <div>default min: 50px</div>
//         <div />
//       </SplitPane>
//     </SplitPane>

//     // <Layout>
//     //   <Sider theme="light" width={280} style={{ borderRight: '1px solid #dcdcdc', background: '#e5e2e3' }}>
//     //     <div>
//     //       <div className="p-4 border-b">
//     //         <Input.Search placeholder="Filter traits..." />
//     //       </div>
//     //       <div className="mt-2 overflow-y-auto rounded">
//     //         <ul>
//     //           {routes.map((route) => {
//     //             return (
//     //               <li>
//     //                 <Link
//     //                   to={route.path}
//     //                   className="flex items-center px-4 p-2 font-normal text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
//     //                 >
//     //                   {route.icon ? (
//     //                     <img
//     //                       src={route.icon}
//     //                       alt=""
//     //                       className="w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
//     //                     />
//     //                   ) : (
//     //                     <svg
//     //                       className="w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
//     //                       fill="currentColor"
//     //                       viewBox="0 0 20 20"
//     //                       xmlns="http://www.w3.org/2000/svg"
//     //                     >
//     //                       <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
//     //                       <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
//     //                     </svg>
//     //                   )}
//     //                   <span className="ml-3 text-xs">{route.title}</span>
//     //                 </Link>
//     //               </li>
//     //             )
//     //           })}
//     //         </ul>
//     //       </div>
//     //     </div>
//     //   </Sider>
//     //   <Layout>
//     //     <Content className="p-4" style={{ background: '#e9e9e9' }}>
//     //       {children}
//     //     </Content>
//     //   </Layout>
//     // </Layout>
//   )
// }

export const Sidebar = () => {
  return (
    <div>
      <div className="p-4 border-b border-b-gray-100">
        <Input.Search placeholder="Filter traits..." />
      </div>
      <div className="mt-2 overflow-y-auto rounded">
        <ul>
          {routes.map((route) => {
            return (
              <li>
                <Link
                  to={route.path}
                  className="flex items-center px-4 p-2 font-normal text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {route.icon ? (
                    <img
                      src={route.icon}
                      alt=""
                      className="w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    />
                  ) : (
                    <svg
                      className="w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                    </svg>
                  )}
                  <span className="ml-3 text-xs">{route.title}</span>
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
    console.log(index, size)
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
          <div>????</div>
        </SplitPane>
      </div>
    </SplitPane>
  )
}
