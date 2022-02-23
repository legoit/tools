import { useRef } from 'react'
import { Button } from 'antd'
import vkbeautify from 'vkbeautify'
import { IEditorRef, MonacoEditor } from '../components/Editor'

const sample = `<catalog><book id="bk101"><author>Gambardella, Matthew</author><title>XML Developer's Guide</title><genre>Computer</genre><price>44.95</price><publish_date>2000-10-01</publish_date><description>An in-depth look at creating applications with XML.</description></book><book id="bk102"><author>Ralls, Kim</author><title>Midnight Rain</title><genre>Fantasy</genre><price>5.95</price><publish_date>2000-12-16</publish_date><description>A former architect battles corporate zombies, an evil sorceress, and her own childhood to become queen of the world.</description></book><book id="bk103"><author>Corets, Eva</author><title>Maeve Ascendant</title><genre>Fantasy</genre><price>5.95</price><publish_date>2000-11-17</publish_date><description>After the collapse of a nanotechnology society in England, the young survivors lay the foundation for a new society.</description></book></catalog>`

export const Xml = () => {
  const editor = useRef<IEditorRef>(null)

  const handleParse = () => {
    const input = editor.current?.getValue()
    if (input) {
      const output = vkbeautify.xml(input)
      editor.current?.setValue(output)
    }
  }

  return (
    <div className="py-4">
      <header className="px-4 border-b mb-4 border-b-gray-300">
        <h6 className="font-medium leading-tight text-base mt-0 mb-2">XML Formatter</h6>
      </header>
      <MonacoEditor language="xml" value={sample} ref={editor} />
      <Button onClick={handleParse}>Format</Button>
    </div>
  )
}
