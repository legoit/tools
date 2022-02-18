import html2react from 'html2react'
import reactElementToJSXString from 'react-element-to-jsx-string'

interface IOptions {
  asFunction: boolean
  name: string
}

const defaultOptions: IOptions = {
  asFunction: true,
  name: 'Component'
}

const indent = (s: string) =>
  s
    .split('\n')
    .map((l) => `  ${l}`)
    .join('\n')

const wrapAsFunction = (name: string, jsx: string) => `function ${name} () {
  return ${indent(jsx).slice(2)}
}`

export default (element: string, options: IOptions = defaultOptions) => {
  const opts: IOptions = { ...defaultOptions, ...options }

  const jsx = reactElementToJSXString(html2react(element)[0])

  return opts.asFunction ? wrapAsFunction(opts.name, jsx) : jsx
}
