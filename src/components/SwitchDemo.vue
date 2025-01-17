<template>
    <Switch v-model:value="y"   />
<!-- 通过 y = $event 非常方便地获取到了子组件的传值 -->

</template>

<script setup lang="ts">
import Switch from '../lib/Switch.vue';
import { ref } from 'vue';

const y = ref(false);


</script>