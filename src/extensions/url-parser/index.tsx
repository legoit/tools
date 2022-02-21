import { useEffect, useRef, useState } from 'react'
import { Button, Row, Col } from 'antd'
import urlParse from 'url-parse'
import UrlQueryParser from 'url-query-parser'
import * as monaco from 'monaco-editor'
import ReactJson from 'react-json-view'

const sample =
  'https://www.google.com/search?sxsrf=ALeKk03TpCS68ykjCqWWm7_5xDzmkdCBsw%3A1591797655810&ei=l-fgXsOCMcyl-Qaq8p6AAw&q=sample+long+query+string+url&oq=sample+long+query+string+url&gs_lcp=CgZwc3ktYWIQAzoECAAQRzoCCAA6BggAEBYQHjoICCEQFhAdEB46BAgjECc6BwgAEBQQhwI6BwgjELACECc6BAgAEA06CAgAEAgQDRAeOgoIABAIEA0QChAeUIcLWP4vYIAyaAFwAXgAgAF-iAHQC5IBAzkuNpgBAKABAaoBB2d3cy13aXo&sclient=psy-ab&ved=0ahUKEwiDqtCutPfpAhXMUt4KHSq5BzAQ4dUDCAw&uact=5&bb[]=1&bb[]=ab&&bb[]=x'

export default () => {
  const [urlJson, setUrlJson] = useState({})
  const [queryJson, setQueryJson] = useState({})
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null)
  const monacoEditorElementRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    if (monacoEditorElementRef.current) {
      editorRef.current = monaco.editor.create(monacoEditorElementRef.current, {
        value: sample,
        language: 'text'
      })
    }
  }, [])

  return (
    <Row>
      <Col span={24}>
        <div ref={monacoEditorElementRef} style={{ height: 480, width: '80%' }} />
        <Button onClick={handleParse}>Format</Button>
        <ReactJson src={urlJson} name={false} />
        <ReactJson src={queryJson} name={false} />
      </Col>
    </Row>
  )
}
