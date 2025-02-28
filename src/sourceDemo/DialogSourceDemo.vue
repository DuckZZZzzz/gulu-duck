<demo>
    常规用法
</demo>
<template>
    <Button level="main" @click="toggle">打开dialog</Button>
    <Dialog
      v-model:visible="x"
      :closeOnClickOverlay="false"
      :ok="onOk"
      :cancel="onCancel"
      :title="title"
    >
      <div>没有梦想何必远方</div>
    </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from '../lib/Button.vue';
import Dialog from '../lib/Dialog.vue';

const x = ref(false)
const toggle = () => {
    x.value = !x.value
}

const onOk = () => {
    console.log('ok')
}
const onCancel = () => {
    console.log('cancel')
}
const title = ref('你也走了很远的路吧')
</script>