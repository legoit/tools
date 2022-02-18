import 'normalize.css'
import 'antd/dist/antd.css'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Sidebar } from '../layout/Sidebar/Sidebar'
import { Xml } from '../xml/Xml'
import { Json } from '../json/Json'
import { HTMLToJSX } from '../html2jsx/_index'

const Hello = () => {
  return <div className="w-24 h-24 rounded-lg bg-white shadow-md" />
}

export default function App() {
  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route path="/xml" element={<Xml />} />
          <Route path="/json" element={<Json />} />
          <Route path="/html2jsx" element={<HTMLToJSX />} />
          <Route path="/" element={<Hello />} />
        </Routes>
      </Sidebar>
    </Router>
  )
}
