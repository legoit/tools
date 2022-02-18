import { useEffect, useRef } from 'react'
import { Button, Form, Input } from 'antd'
import * as monaco from 'monaco-editor'
// import htmltojsx from 'htmltojsx'
import Html2jsx from './html2jsx'

// console.log(htmltojsx)
/*
var HTMLtoJSX = require('htmltojsx');
var converter = new HTMLtoJSX({
  createClass: true,
  outputClassName: 'AwesomeComponent'
});
var output = converter.convert('<div>Hello world!</div>');
console.log(output)
*/

const sample = `
<!-- Hello world -->
<div class="awesome" style="border: 1px solid red">
  <label for="name">Enter your name: </label>
  <input type="text" id="name" />
</div>
<p>Enter your HTML here</p>
`
const div = document.createElement('div')

const converter = new (window as any).HTMLtoJSX({
  createClass: false,
  outputClassName: 'AwesomeComponent'
})

const output = converter.convert(sample)
console.log(output)

export const HTMLToJSX = () => {
  return (
    <div>
      <h2>HTML to JSX</h2>
    </div>
  )
}
