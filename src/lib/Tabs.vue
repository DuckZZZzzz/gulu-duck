<template>
    <div>
        Tabs组件
        <slot></slot>
        <component :is="slots?.default()[0]"></component>
        <component :is="slots?.default()[1]"></component>
        <component :is="slots?.default()[2]"></component>
    </div>
</template>

<script setup lang="ts">
import Tab from './Tab.vue';
import { useSlots } from 'vue';
const slots = useSlots()
console.log(slots?.default()[0].type === Tab)
console.log(slots?.default()[1].type === Tab)
console.log(slots?.default()[2].type === Tab)

</script>