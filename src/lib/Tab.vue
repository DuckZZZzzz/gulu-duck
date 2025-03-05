
<template>
    <div class="box">
        <slot></slot>
    </div>
</template>
<script setup lang="ts">

</script>
<style lang="scss">
.box {
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    box-sizing: border-box;
    overflow: hidden;
}
</style>