import { useEffect, useRef } from 'react'
import { Button, Form, Input, Row, Col } from 'antd'
import * as monaco from 'monaco-editor'

const sample = `
<!-- Hello world -->
<div class="awesome" style="border: 1px solid red">
  <label for="name">Enter your name: </label>
  <input type="text" id="name" />
</div>
<p>Enter your HTML here</p>
`

export default () => {
  // const [form] = useForm()
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null)
  const monacoEditorElementRef = useRef<HTMLDivElement>(null)

  const handleParse = () => {
    const editor = editorRef.current

    if (editor) {
      const input = editor.getValue()
      if (input) {
        const converter = new (window as any).HTMLtoJSX({
          createClass: false,
          outputClassName: 'AwesomeComponent'
        })

        const output = converter.convert(input)
        editor.setValue(output)
      }
    }
  }

  useEffect(() => {
    if (monacoEditorElementRef.current) {
      editorRef.current = monaco.editor.create(monacoEditorElementRef.current, {
        value: sample,
        language: 'html'
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
