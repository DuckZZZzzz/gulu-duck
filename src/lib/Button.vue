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
        // disabled在props里面声明了就不会自动继承到子组件的根元素上了 需要手动添加
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
// UI库的样式不能用scoped 如果样式是 scoped 的，那么用户就需要针对每个组件单独进行样式覆盖，这会增加开发和维护成本
    $blue: #409eff;
.gulu-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    white-space: nowrap;
    // 文字不换行
    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;

    // 哇好聪明
    & + & {
        margin-left: 8px;
    }
    &.gulu-theme-button {
        background: $blue;
        color: #fff;
        box-shadow: 0 1px 0 fade-out(#000000,  0.95);
    }
    &.gulu-theme-link {
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
    &.gulu-level-danger {
        color: #f56c6c;
        font-weight: bold;
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
        border-color: #fff #fff #fff transparent;
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