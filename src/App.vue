<template>
  <router-view />
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'
import {router} from './router'

const viewWith = document.documentElement.clientWidth
const menuvisible = ref(viewWith <= 500 ? false : true  )
router.afterEach(() => {
  if (viewWith <= 500) {
    menuvisible.value = false
  }
})
provide('menuvisible', menuvisible)

</script>
