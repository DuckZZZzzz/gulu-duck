<demo>
    常规用法
</demo>
<template>
  <Button @click="toggle">显示\隐藏</Button>
  <Dialog
    v-model:visible="x"
    :closeOnClickOverlay="false"
    :ok="onOk"
    :cancel="onCancel"
  >
    <div>这是一段提示</div>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Dialog from '../../lib/Dialog.vue';

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
</script>