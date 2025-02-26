import { md } from "./plugins/md";
import fs from 'fs'
import {baseParse} from '@vue/compiler-core'

export default {
  plugins: [md()],
  vueCustomBlockTransforms: {
    // 只有含有demo标签才会进行以下处理
    demo: (options) => {
      const { code, path } = options
      const file = fs.readFileSync(path).toString()
      const parsed = baseParse(file).children.find(n => n.tag === 'demo')
      console.log(parsed,'....')
      const title = parsed.children[0].content
      const main = file.split(parsed.loc.source).join('').trim()//将源代码字符串按照 demo 标签及其内容的位置信息进行分割，这一步就把demo去除了
      return `export default function (Component) {
        Component.__sourceCode = ${
        JSON.stringify(main)
        }
        Component.__sourceCodeTitle = ${JSON.stringify(title)}
        Component.__parsed = ${JSON.stringify(parsed)}
      }`.trim()
    }
  }
};