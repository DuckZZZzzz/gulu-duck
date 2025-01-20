<template>
<div >
    <!-- $attrs包括了所有父组件传递给子组件的非prop属性 -->
     <!-- 如果想部分绑定也可以，const {size, ...rest} = context.attrs 将属性分开，再v-bind="rest" -->
    <button v-bind="rest">
        <slot></slot>
    </button>
</div>

</template>

<script lang="ts" setup>
import { useAttrs } from 'vue';

// 禁止继承属性
defineOptions({
  inheritAttrs: false
});
defineProps({
    size: {
        type: String,
        default: 'normal'
    },
    disabled: {
        type: Boolean,
        default: false
    }
})
const {size, ...rest} = useAttrs()

</script>

<style lang="scss" scoped>
div {
    border: 1px solid red;
}
</style>