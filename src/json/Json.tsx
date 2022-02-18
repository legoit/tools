import { useEffect, useRef } from 'react'
import { Row, Col, Button } from 'antd'
import * as monaco from 'monaco-editor'

const sample = ''

function isJsonStr(str: string): boolean {
  try {
    JSON.parse(str)
    return true
  } catch (error) {
    return false
  }
}

function jsonReviver(k: string, v: any) {
  if (isJsonStr(v)) {
    return JSON.parse(v)
  }

  return v
}

export const Json = () => {
  // const [form] = useForm()
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null)
  const monacoEditorElementRef = useRef<HTMLDivElement>(null)

  const handleParse = () => {
    const editor = editorRef.current

    if (editor) {
      const input = editor.getValue()
      if (input) {
        try {
          const json = JSON.parse(input, jsonReviver)
          const output = JSON.stringify(json, null, 2)
          editor.setValue(output)
        } catch (error) {
          console.log(error)
        }
      }
    }
  }

  useEffect(() => {
    if (monacoEditorElementRef.current) {
      editorRef.current = monaco.editor.create(monacoEditorElementRef.current, {
        value: sample,
        language: 'json'
      })
    }
  }, [])

  return (
    <Row>
      <Col span={24}>
        <div ref={monacoEditorElementRef} style={{ height: 480, width: '80%' }} />
        <Button onClick={handleParse}>Format</Button>
      </Col>
    </Row>
  )
}
