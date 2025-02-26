<template>
    <Switch v-model:value="checked"/>
</template>

<script setup>

import { ref } from 'vue'
import Switch from '../../lib/Switch.vue'

const checked = ref(false)
</script>
