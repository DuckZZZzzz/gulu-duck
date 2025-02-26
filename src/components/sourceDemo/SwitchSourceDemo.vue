
<demo>
    常规用法
</demo>
<template class="language-css">
    <Switch v-model:value="checked"/>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Switch from '../../lib/Switch.vue'

const checked = ref(false)
</script>
