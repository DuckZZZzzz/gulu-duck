<demo>
    支持loading状态
</demo>
<template>
    <Button loading >加载中</Button>
    <Button >加载完毕</Button>
    <Button loading theme="link">加载中</Button>
    <Button theme="link">加载完毕</Button>
</template>

<script setup lang="ts">
import Button from '../lib/Button.vue';

</script>