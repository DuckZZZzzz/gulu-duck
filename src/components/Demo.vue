<template>
<div class="demo">
      <h2 v-text="sourceCodeTitle"></h2>
      <div class="demo-component">
        <component :is="sourceDemo"></component>
      </div>
      <div class="demo-actions">
        <Button size="small" @click="codeVisible = !codeVisible">{{codeVisible ? '隐藏代码' : '查看代码'}}</Button>
      </div>
      <div class="demo-code" v-show="codeVisible">
        <pre class="language-html" v-html="html"></pre>
      </div>
    </div>
</template>
<script setup lang="ts">
import Button from '../lib/Button.vue';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import { ref } from 'vue';

const props = defineProps({
    sourceDemo: Object,
})

const sourceCode = props.sourceDemo.__sourceCode;
const sourceCodeTitle = props.sourceDemo.__sourceCodeTitle;
const html = Prism.highlight(sourceCode, Prism.languages.html, 'html')
// const html = computed(() => {
//     return Prism.highlight(sourceCode, Prism.languages.html, 'html');
// })
const codeVisible = ref(false);
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
      white-space: pre-wrap;//适配移动端展示
    }
  }
}
</style>