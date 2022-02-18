import { Button, Form, Input } from 'antd'
import * as monaco from 'monaco-editor'
import vkbeautify from 'vkbeautify'
import { useForm } from 'antd/lib/form/Form'
import { useEffect, useRef } from 'react'

export const Xml = () => {
  // const [form] = useForm()
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null)
  const monacoEditorElementRef = useRef<HTMLDivElement>(null)

  const handleParse = () => {
    const editor = editorRef.current

    if (editor) {
      const input = editor.getValue()
      if (input) {
        const output = vkbeautify.xml(input)

        ;(window as any).editor = editor
        editor.setValue(output)
        const range = editor.getModel()?.getFullModelRange()
        if (range) {
          editor.setSelection(range)
          setTimeout(() => {
            editor.setScrollPosition({ scrollLeft: 0, scrollTop: 0 })
          })
        }
      }
    }
  }

  useEffect(() => {
    if (monacoEditorElementRef.current) {
      editorRef.current = monaco.editor.create(monacoEditorElementRef.current, {
        value: '',
        language: 'xml'
      })
    }
  }, [])

  return (
    <div>
      <div ref={monacoEditorElementRef} style={{ height: 480, width: '100%' }} />

      <Button onClick={handleParse}>Format</Button>
      {/* <Form form={form}>
        <Form.Item name="input">
          <Input.TextArea rows={12} />
      </Form.Item>
      </Form> */}
    </div>
  )
}
