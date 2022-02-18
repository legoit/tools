import { Button } from 'antd'
import * as monaco from 'monaco-editor'
import { useEffect, useRef } from 'react'
import { jsonToHTML } from './workerFormatter'

const sample = ''

function jsonReviver(k: string, v: any) {

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

          console.log(JSON.stringify(json, null, 2))
        } catch (error) {
          console.log(error)
        }
        // console.log(jsonToHTML(input))
        // editor.setValue(JSON.stringify(output, null, 2))
      }
    }
  }

  useEffect(() => {
    if (monacoEditorElementRef.current) {
      editorRef.current = monaco.editor.create(monacoEditorElementRef.current, {
        value: sample
      })
    }
  }, [])

  return (
    <div>
      <div ref={monacoEditorElementRef} style={{ height: 480, width: '100%' }} />

      <Button onClick={handleParse}>Format</Button>
    </div>
  )
}
