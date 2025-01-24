<template>
    <Tabs v-model:selected="x">
        <Tab title="tab1">内容1</Tab>
        <Tab title="tab2">内容2</Tab>
        <Tab title="tab3">内容3</Tab>
        <Tab title="tab4">内容4</Tab>
    </Tabs>
</template>

<script setup lang="ts">
import Tab from '../lib/Tab.vue'
import Tabs from '../lib/Tabs.vue'
import { ref } from 'vue'

// 为了保证selected的改变能正常被监听到，应该在子组件内也保持selected的响应性
const x = ref('tab1')
</script>