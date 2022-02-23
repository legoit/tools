import { useState, useEffect, useRef, useCallback, FC, forwardRef, useImperativeHandle } from 'react'
import * as monaco from 'monaco-editor'

const MAX_HEIGHT = 600
const MIN_COUNT_OF_LINES = 9
const LINE_HEIGHT = 20

interface PropTypes {
  value?: string
  language?: string
}

export interface IEditorRef {
  getValue(): string

  setValue(value: string): void
}

export const MonacoEditor = forwardRef(({ language, value = '' }: PropTypes, ref: React.Ref<IEditorRef>) => {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null)
  const monacoEditorElementRef = useRef<HTMLDivElement>(null)

  const [height, setHeight] = useState(170)
  const valueGetter = useRef<any>()

  const handleEditorChange = useCallback((_) => {
    const countOfLines = valueGetter.current?.split('\n').length
    if (countOfLines >= MIN_COUNT_OF_LINES) {
      const currentHeight = countOfLines * LINE_HEIGHT
      if (MAX_HEIGHT > currentHeight) {
        setHeight(currentHeight)
      }
    }
  }, [])

  const handleEditorDidMount = useCallback(
    (_valueGetter, editor) => {
      valueGetter.current = _valueGetter
      editor.onDidChangeModelContent(handleEditorChange)
    },
    [handleEditorChange]
  )
  useEffect(() => {
    if (monacoEditorElementRef.current) {
      editorRef.current = monaco.editor.create(monacoEditorElementRef.current, {
        value,
        language
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useImperativeHandle(ref, () => ({
    getValue() {
      return editorRef.current?.getValue() || ''
    },
    setValue(_value: string) {
      editorRef.current?.setValue(_value)
    }
  }))

  return <div ref={monacoEditorElementRef} style={{ height: 480, width: '100%' }} />
})

MonacoEditor.defaultProps = {
  language: 'txt',
  value: ''
}
