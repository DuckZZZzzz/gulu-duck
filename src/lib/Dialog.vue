<template>
    <template v-if="visible">
        <Teleport to="body">
            <!-- Teleport 用于将组件挂载到指定的元素上 这里是让dialog的index不受环境影响层级，直接到body里（到app里也可以），确保它永远展示在最上方< -->
            <div class="gulu-dialog-mask" @click="onClickOverlay">
            </div>
            <div class="gulu-dialog-container">
                <header>
                    <h3>{{ title }}</h3>
                <span class="gulu-dialog-close" @click="close">X</span>
            </header>
            <main>
                <slot></slot>
            </main>
            <footer>
                <Button @click="handCancel">取消</Button>
                <Button level="main" @click="handleOk">确定</Button>
            </footer>
        </div>
    </Teleport>
    </template>
</template>
<script lang="ts" setup>

import Button from './Button.vue'

const { visible, closeOnClickOverlay, ok, cancel, title } = defineProps({
    visible: {
        type: Boolean,
        default: false
    },
    closeOnClickOverlay: {
        type: Boolean,
        default: true
    },
    ok: {
        type: Function
    },
    cancel: {
        type: Function
    },
    title: {
        type: String,
        default: '提示'
    }
})
const onClickOverlay = () => {
    if (closeOnClickOverlay) {
        close()
    }
}
// 注意visible是父组件的传值，不能直接修改visible
// Vue 推崇单向数据流（one-way data flow），这有助于保持应用状态的可预测性和更容易调试。如果允许子组件随意修改 props，可能会导致数据流向变得复杂，难以追踪和理解
const emit = defineEmits(['update:visible'])

const close = () => {
    emit('update:visible', false)
}

const handleOk = () => {
      if(ok?.() !== false){
        console.log(ok?.())
        close()
      }
}

const handCancel = () => {
   if(cancel?.() !== false){
        close()
      } 
}

</script>

<style lang="scss">
.gulu-dialog-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
}

.gulu-dialog-container {

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    max-width: 600px;
    min-width: 300px;
    max-height: 500px;
    overflow: auto;
    // 为了使它的宽度在电脑上不会无限大或无限小，给一个max-width min-width
    background-color: #fff;
    border-radius: 2px;
    padding: 16px;
    z-index: 101;

    >header {
        padding-bottom: 10px;
        border-bottom: 1px solid #f0f0f0;
        position: relative;
        h3 {
            margin: 0;
        }
        .gulu-dialog-close {
            position: absolute;
            right: 0;
            top: 0;
            cursor: pointer;
        }
    }

    >main {
        padding: 10px 0;
    }

    >footer {
        text-align: right;
    }
}
</style>