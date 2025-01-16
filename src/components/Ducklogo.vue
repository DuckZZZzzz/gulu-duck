<template>
    <h1>
        Ducklogo-{{ ele }}
        <slot></slot>
    </h1>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    ele: String
})
</script>