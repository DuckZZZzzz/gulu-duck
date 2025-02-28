<template>
    <button class="gulu-button" :class="classString" :disabled>
        <span class="gulu-loadingIndicator" v-if="loading"></span>
        <slot></slot>
    </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue';


const {theme, size, level, loading} = defineProps({
    theme: {
        type: String,
        default: 'button'
    },
    size: {
        type: String,
        default: 'normal'
    },
    level: {
        type: String,
        default: 'normal'
    },
    disabled: {
        type: Boolean,
        default: false
    },
    loading: {
        type: Boolean,
        default: false
    }
})
const classString = computed(() => {
    return {
        [`gulu-theme-${theme}`]: theme,
        [`gulu-size-${size}`]: size,
        [`gulu-level-${level}`]: level,
    }
})

</script>

<style lang="scss">
    $blue: #409eff;
    .gulu-button:active:not([disabled]) {
    transform: translateY(1px);
}
.gulu-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    white-space: nowrap;

    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;
    background: #fff;


    & + & {
        margin-left: 8px;
    }
    &.gulu-theme-button {
        color:#000;
        box-shadow: 0 1px 0 rgba( #000000, 0.05);
    }
    &.gulu-theme-link {
        background: #fff;
        border: none;
        color: $blue;
    }
    &.gulu-theme-text {
        background: #fff;
        border: none;
    }

    &.gulu-size-big {
        font-size: 20px;
        padding: 8px 16px;
    }
    &.gulu-size-small {
        font-size: 12px;
        padding: 2px 4px;
    }
    &.gulu-theme-button.gulu-level-main {
        background-color: $blue;
        color: #fff;
    }
    &.gulu-theme-button.gulu-level-danger {
        background-color: #f56c6c;
        color: #fff;
    }
    &[disabled] {
        opacity: 0.5;
    }
    .gulu-loadingIndicator {
        width: 14px;
        height: 14px;
        display: inline-block;
        margin-right: 4px;
        border-radius: 8px;
        border-color: $blue $blue $blue transparent;
        border-style: solid;
        border-width: 2px;
        animation: gulu-spin 1s infinite linear;
    }
    
    @keyframes gulu-spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
}

</style>