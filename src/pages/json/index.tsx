import { useRef } from 'react'
import { Button } from 'antd'
import { IEditorRef, MonacoEditor } from '@/components/Editor'
import { Header } from '@/components/Header'

const sample = ''

function isJsonStr(str: string): boolean {
  try {
    JSON.parse(str)
    return true
  } catch (_error) {
    return false
  }
}

function jsonReviver(k: string, v: any) {
  if (isJsonStr(v)) {
    return JSON.parse(v)
  }

  return v
}

export default function Json(): JSX.Element {
  const editorRef = useRef<IEditorRef | null>(null)

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
          // console.log(error)
        }
      }
    }
  }

  return (
    <div>
      <Header title="JSON Formetter">
        <Button onClick={handleParse}>Format</Button>
      </Header>
      <MonacoEditor ref={editorRef} value={sample} language="json" />
    </div>
  )
}
