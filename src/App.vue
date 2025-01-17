<template>
  <router-view />
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'

const viewWith = document.documentElement.clientWidth
const menuvisible = ref(viewWith <= 500 ? false : true  )
provide('menuvisible', menuvisible)

</script>
