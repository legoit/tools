import { useEffect, useRef } from 'react'
import { Button, Form, Input, Row, Col } from 'antd'
import { IEditorRef, MonacoEditor } from '@/components/Editor'
import { Header } from '@/components/Header'

const sample = `
<!-- Hello world -->
<div class="awesome" style="border: 1px solid red">
  <label for="name">Enter your name: </label>
  <input type="text" id="name" />
</div>
<p>Enter your HTML here</p>
`

export default function HTML2JSX(): JSX.Element {
  const editorRef = useRef<IEditorRef>(null)

  const handleParse = () => {
    const editor = editorRef.current

    if (editor) {
      const input = editor.getValue()
      if (input) {
        const converter = new (window as any).HTMLtoJSX({
          createClass: false,
          outputClassName: 'AwesomeComponent',
        })

        const output = converter.convert(input)
        editor.setValue(output)
      }
    }
  }

  return (
    <div>
      <Header title="HTML to JSX">
        <Button onClick={handleParse}>Format</Button>
      </Header>
      <MonacoEditor ref={editorRef} language="html" value={sample} />
    </div>
  )
}
