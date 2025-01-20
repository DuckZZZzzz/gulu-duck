<template>
    <button :class="{ checked: value }" @click="toggle"><span></span></button>
</template>

<script lang="ts" setup>
import {  defineProps, defineEmits } from 'vue';

const props = defineProps<{
    value: boolean
}>()

const emit = defineEmits<{
    (e: 'update:value', value: boolean)
    // e和value都是为了语义化，换成别的变量名也可以的
}>()

const toggle = () => {
    emit('update:value', !props.value)
    // 注意:后没有空格
}
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;

button {
    width: $h*2;
    height: $h;
    border: none;
    background-color: gray;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    outline: none;
    border-radius: calc(#{$h} / 2);

}

span {
    position: absolute;
    top: 2px;
    left: 2px;

    // - 的左右两边一点要空格不然不会被识别成减号
    // 为了保证有个动画的效果，按钮右移只能改left的值不能用right来定位
    height: $h2;
    width: $h2;
    background-color: #fff;
    border-radius: calc(#{$h2} / 2 );
    transition: all 250ms;
}

button.checked {
    background-color: blue;
}

button.checked>span {
    left: calc(100% - #{$h2} - 2px);
}

button:focus {
    outline: none;
}

// 让button的圈圈消失</style>