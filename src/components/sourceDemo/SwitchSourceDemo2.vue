<demo>
    支持disabled
</demo>

<template>
    <Switch v-model:value="checked" disabled/>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Switch from '../../lib/Switch.vue'

const checked = ref(false)
</script>
