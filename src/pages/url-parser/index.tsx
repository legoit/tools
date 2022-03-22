import { FC, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { Button, Row, Col } from 'antd'
import urlParse from 'url-parse'
import UrlQueryParser from 'url-query-parser'
import { IEditorRef, MonacoEditor } from '@/components/Editor'
import { Header } from '@/components/Header'

// eslint-disable-next-line import/dynamic-import-chunkname
const BrowserReactJsonView = dynamic(() => import('react-json-view'), {
  ssr: false,
})

const sample =
  'https://www.google.com/search?sxsrf=ALeKk03TpCS68ykjCqWWm7_5xDzmkdCBsw%3A1591797655810&ei=l-fgXsOCMcyl-Qaq8p6AAw&q=sample+long+query+string+url&oq=sample+long+query+string+url&gs_lcp=CgZwc3ktYWIQAzoECAAQRzoCCAA6BggAEBYQHjoICCEQFhAdEB46BAgjECc6BwgAEBQQhwI6BwgjELACECc6BAgAEA06CAgAEAgQDRAeOgoIABAIEA0QChAeUIcLWP4vYIAyaAFwAXgAgAF-iAHQC5IBAzkuNpgBAKABAaoBB2d3cy13aXo&sclient=psy-ab&ved=0ahUKEwiDqtCutPfpAhXMUt4KHSq5BzAQ4dUDCAw&uact=5&bb[]=1&bb[]=ab&&bb[]=x'

export default function UrlParser(): JSX.Element {
  const [urlJson, setUrlJson] = useState({})
  const [queryJson, setQueryJson] = useState({})
  const editorRef = useRef<IEditorRef>(null)

  const handleParse = () => {
    const editor = editorRef.current

    if (editor) {
      const input = editor.getValue()
      if (input) {
        const url = urlParse(input)
        const queryStr = decodeURIComponent(url.query.slice(1))
        const query = new UrlQueryParser(queryStr)

        setUrlJson(url)
        setQueryJson(query.toObject())
      }
    }
  }

  return (
    <div>
      <Header title="URL Parser">
        <Button onClick={handleParse}>Format</Button>
      </Header>
      <MonacoEditor language="text" value={sample} ref={editorRef} />
      <BrowserReactJsonView src={urlJson} name={false} />
      <BrowserReactJsonView src={queryJson} name={false} />
    </div>
  )
}
