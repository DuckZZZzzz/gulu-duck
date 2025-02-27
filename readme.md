# gulu-duck-ui
onePiece UI 是一款基于 Vue 3 的 UI 组件库。这款组件库其实是我为了总结自己这段时间学习的 Vue 3 相关的学习感受而写的，全程亲手编写，没有采用任何第三方组件库，包括你现在看到的这个官网也都是我自己写的。所以强烈不建议你将此 UI 库用于生产环境。但如果你是抱着看源代码的目的来的，那么这个库还是值得一看的。源代码放在了 GitHub 上，历史提交信息非常规范，你可以按提交的顺序逐个查看；你也可以直接查看每个组件的源代码和示例，运行方法见下文。


## 安装
打开终端运行下列命令:

```bash
npm install duck-ui
```

或

```bash
yarn add duck-ui
```

## 开始使用

请先 <a href="#安装">安装</a> 本组件库

然后在你的代码中写入下面的代码:

```vue
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>

<script setup>
import { Button, Tabs, Switch, Dialog } from 'duck-ui'
</script>
```

就可以使用我的组件了

## 文档
<a href="#gulu-duck-ui">介绍</a>
<a href="#安装">安装</a>
<a href="#开始使用">使用</a>


## 贡献

如果你有任何建议或想要贡献代码，请随时提交 Pull Request 或创建 Issue。

## 许可证

本项目采用 MIT 许可证。请查看 `LICENSE` 文件了解更多信息。
