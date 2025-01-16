<template>
    <h1>
        Ducklogo2-{{ ele }}
    </h1>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    ele: String
})
</script>