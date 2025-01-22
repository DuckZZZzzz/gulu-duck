<template>
    <div>
        Tabs组件
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { useSlots, computed } from 'vue';
import Tab from './Tab.vue';

const slots = useSlots();
const defaultSlotContent = slots?.default?.();

// 检查并过滤默认插槽中的 VNode，确保它们都是 Tab 组件
const validTabs = computed(() => {
  if (!defaultSlotContent) return [];

  return defaultSlotContent.filter((vnode) => {
    if (vnode.type !== Tab) {
      console.error('Tabs的子标签必须是Tab');
      return false;
    }
    return true;
  });
});

// 如果没有有效的 Tab 组件，抛出错误
if (!validTabs.value.length && defaultSlotContent) {
  throw new Error('Tabs组件中必须包含至少一个有效的 Tab 子组件');
}
</script>