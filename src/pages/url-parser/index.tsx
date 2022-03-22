import { useEffect, useRef, useState } from 'react'
import { Button, Row, Col } from 'antd'
import urlParse from 'url-parse'
import UrlQueryParser from 'url-query-parser'
import ReactJson from 'react-json-view'
import { IEditorRef, MonacoEditor } from '@/components/Editor'

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
    <Row>
      <Col span={24}>
        <MonacoEditor language="text" value={sample} ref={editorRef} />
        <Button onClick={handleParse}>Format</Button>
        <ReactJson src={urlJson} name={false} />
        <ReactJson src={queryJson} name={false} />
      </Col>
    </Row>
  )
}
