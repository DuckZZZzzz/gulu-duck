<template>
    <button class="gulu-switch" :class="{ 'gulu-checked': value }" @click="toggle"><span></span></button>
</template>

<script lang="ts" setup>

const props = defineProps<{
    value: boolean
}>()

const emit = defineEmits<{
    (e: 'update:value', value: boolean)
}>()


const toggle = () => {
    emit('update:value', !props.value)
}
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;

.gulu-switch {
    width: $h*2;
    height: $h;
    border: none;
    background-color: gray;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    outline: none;
    border-radius: calc(#{$h} / 2);
}

.gulu-switch span {
    position: absolute;
    top: 2px;
    left: 2px;

    height: $h2;
    width: $h2;
    background-color: #fff;
    border-radius: calc(#{$h2} / 2 );
    transition: all 250ms;
}

.gulu-switch.gulu-checked {
    background-color: blue;
}

.gulu-switch.gulu-checked>span {
    left: calc(100% - #{$h2} - 2px);
}

.gulu-switch:focus {
    outline: none;
}

</style>