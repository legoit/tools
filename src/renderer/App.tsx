import React from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from '../layout/Sidebar/Sidebar'
import { Xml } from '../xml/Xml'
import { Json } from '../json/Json'
const HTMLToJSX = React.lazy(() => import('../html2jsx'))
const URLParser = React.lazy(() => import('../extensions/url-parser'))

const Hello = () => {
  return <div className="w-24 h-24 rounded-lg bg-white shadow-md" />
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/xml" element={<Xml />} />
          <Route path="/json" element={<Json />} />
          <Route
            path="/html2jsx"
            element={
              <React.Suspense fallback={<>loading</>}>
                <HTMLToJSX />
              </React.Suspense>
            }
          />
          <Route
            path="/url-parser"
            element={
              <React.Suspense fallback={<>loading</>}>
                <URLParser />
              </React.Suspense>
            }
          />
          <Route path="/" element={<Hello />} />
        </Routes>
      </Layout>
    </Router>
  )
}
