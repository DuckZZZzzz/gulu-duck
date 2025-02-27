<demo>
    常规用法
</demo>
<template>
    <Tabs v-model:selected="selected">
        <Tab title="tab1">内容1</Tab>
        <Tab title="tab2">内容2</Tab>
        <Tab title="tab3">内容3</Tab>
        <Tab title="tab4">内容4</Tab>
    </Tabs>
</template>

<script setup lang="ts">
import Tab from '../../lib/Tab.vue'
import Tabs from '../../lib/Tabs.vue'
import { ref } from 'vue'
const selected = ref('tab1')
</script>