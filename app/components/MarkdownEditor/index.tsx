/*
 * @Author: jweboy
 * @Date: 2021-12-20 17:18:38
 * @LastEditors: jweboy
 * @LastEditTime: 2022-01-06 14:21:40
 */
import React from 'react'
import styles from '/node_modoules/bytemd/dist/index.min.css'
import { Editor, EditorProps, Viewer } from '@bytemd/react'
// @ts-ignore
import gemoji from '@bytemd/plugin-gemoji'
import highlight from '@bytemd/plugin-highlight'
// @ts-ignore
import gfm from '@bytemd/plugin-gfm'


const plugins = [
  gfm(),
  gemoji(),
  // highlight({
  //   init: () => Promise.resolve('<span>Hello World!</span>')
  // }),
  // Add more plugins here
]

const MarkdownEditor: React.FC<{ onChange?: (data?: string) => void; }> = React.memo(
  React.forwardRef(
    (props, ref) => {
      const [value, setValue] = React.useState('')
      const { onChange } = props

      const handleEditorChange = (val: string) => {
        setValue(val)
        if (typeof onChange === 'function') {
          props.onChange!(val)
        }
      }

      React.useImperativeHandle(ref, () => ({ value }))

      return (
        <Editor value={value} plugins={plugins} onChange={handleEditorChange} />
      )
    }
  )
)

export default MarkdownEditor
