# 开始使用
请先 [安装](#/doc/installation) 本组件库

然后在你的代码中写入下面的代码：

```
import { Button, Tabs, Switch, Dialog } from 'gulu-duck'
import 'gulu-duck/dist/lib/css/output.css'
```

就可以使用我的组件了

## 单文件组件

代码示例：

```
<template>
    <div>
        <Button>按钮<Button>
    </div>
</template>

<script setup>
import { Button, Tabs, Switch, Dialog } from 'gulu-duck'
</script>
```