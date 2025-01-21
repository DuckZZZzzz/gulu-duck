<template>
    <div>
        <Button theme="button">你好</Button>
        <Button theme="link">你好</Button>
        <Button theme="text">你好</Button>
    </div>
    <div>
        <Button size="big">大大大</Button>
        <Button size="normal">中中中</Button>
        <Button size="small">小小小</Button>
    </div>
    <div>
        <Button size="big" theme="link">大大大</Button>
        <Button size="normal" theme="link">中中中</Button>
        <Button size="small" theme="link">小小小</Button>
    </div>
    <div>
        <Button size="big" theme="text">大大大</Button>
        <Button size="normal" theme="text">中中中</Button>
        <Button size="small" theme="text">小小小</Button>
    </div>
    <div>
        <Button theme="button" level="danger">危险按钮</Button>
        <Button theme="link" level="danger">危险链接</Button>
        <Button theme="text" level="danger">危险文本</Button>
    </div>
    <div>
        <Button theme="button" disabled >无法点击按钮</Button>
        <Button theme="link" disabled >无法点击按钮</Button>
        <Button theme="text" disabled >无法点击按钮</Button>
    </div>
    <div>
        <Button loading >加载中</Button>
        <Button >加载完毕</Button>
        <Button loading theme="link">加载中</Button>
        <Button theme="link">加载完毕</Button>
    </div>

</template>

<script setup lang="ts">
import Button from '../lib/Button.vue';
// 因为非prop属性会直接透传，所以Button组件支持click mouseover focus等事件

</script>

<style lang="scss" scoped>
div{
    margin: 25px 0;
}
</style>