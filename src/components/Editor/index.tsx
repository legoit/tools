import {
  useState,
  useEffect,
  useRef,
  useCallback,
  FC,
  forwardRef,
  useImperativeHandle,
} from 'react'
import Editor from '@monaco-editor/react'
// eslint-disable-next-line import/no-namespace
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import { Spin } from 'antd'

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

export const MonacoEditor = forwardRef(
  ({ language, value = '' }: PropTypes, ref: React.Ref<IEditorRef>) => {
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

    useImperativeHandle(ref, () => ({
      getValue() {
        return editorRef.current?.getValue() ?? ''
      },
      setValue(_value: string) {
        editorRef.current?.setValue(_value)
      },
    }))

    return (
      <Editor
        onMount={(editor) => (editorRef.current = editor)}
        height="90vh"
        defaultValue={value}
        defaultLanguage={language}
        loading={<Spin />}
      />
    )
  }
)

MonacoEditor.defaultProps = {
  language: 'txt',
  value: '',
}
