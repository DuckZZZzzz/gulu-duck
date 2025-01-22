<template>
    <Button @click="toggle">显示\隐藏</Button>
    <!-- 如果只需要将 visible 作为输入属性传递给子组件，而不打算监听它的变化或更新父组件的状态，那么可以直接写成 visible 而不是使用动态绑定（:visible="x"）就跟button组件的disabled一样 -->
    <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="onOk" :cancel="onCancel">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>5</div>


    </Dialog>
    <!-- 始终使用 v-bind 或 : 来绑定非字符串类型的属性值，包括布尔值、数字、对象和数组, 比如 xCloseDirectly=false Vue 会将其视为一个字符串 'false' 而不是布尔值 false -->
    <!-- <Dialog @update:visible="closevisible" :visible="x"></Dialog> -->
    <!-- v-model 相当于传一个值+监听这个值,所以遇到监听并输入同一个值就直接简化成v-model  -->
</template>

<script setup lang="ts">
import { ref } from 'vue';
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
</script>