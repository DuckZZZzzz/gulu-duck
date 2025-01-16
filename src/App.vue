<template>
  <router-view />
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'
const menuvisible = ref(false)
provide('menuvisible', menuvisible)

</script>
