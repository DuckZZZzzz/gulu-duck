<template>
<div>
    <h1>Switch 组件示例 </h1>
    <Demo :sourceDemo="SwitchSourceDemo" />
    <Demo :sourceDemo="SwitchSourceDemo2" />

<!-- 通过 checked = $event 非常方便地获取到了子组件的传值 -->

</template>

<script setup lang="ts">
import { ref } from 'vue';
import SwitchSourceDemo from './sourceDemo/SwitchSourceDemo.vue';
import SwitchSourceDemo2 from './sourceDemo/SwitchSourceDemo2.vue';
import Demo from './Demo.vue';

</script>

