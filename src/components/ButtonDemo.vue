<template>
    <Button @click="onclick" @focus="onclick" @mouseover="onclick">你好</Button>

</template>

<script setup lang="ts">
import Button from '../lib/Button.vue';

const onclick = () => {
    console.log('你好')
}
</script>