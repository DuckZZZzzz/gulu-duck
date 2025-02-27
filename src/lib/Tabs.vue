<template>
    <div class="gulu-tabs">
        <div class="gulu-tabs-titles">
            <div :class="{ selected: title === selected }" class="gulu-tabs-title" v-for="(title, index) in titles" :key="title"
                @click="(e) => {updateTab(e)}" :ref="el => {if(title === selected) selectedItem = el}">{{ title }}</div>
                <div class="gulu-tabs-bar" :style="barstyle"></div>
        </div>
        <!-- <slot></slot> -->
        <component :is="current" />
    </div>
</template>

<script setup lang="ts">
import { useSlots, computed, toRefs, onMounted, ref, reactive, nextTick } from 'vue';
import Tab from './Tab.vue';
const emit = defineEmits(['update:selected'])
const props = defineProps({
    selected: {
        type: String
    }
})
// 如果你想解构 props 同时保持其响应性，可以使用 Vue 提供的 toRefs 函数
// selected是响应式，使用时也要加上value
const { selected } = toRefs(props)

const slots = useSlots();
const defaultSlotContent = slots?.default?.();

// 检查并过滤默认插槽中的 VNode，确保它们都是 Tab 组件
const validTabs = computed(() => {
    if (!defaultSlotContent) return [];

    return defaultSlotContent.filter((vnode) => {
        // 这里学习filter的用法，遍历每一项，把有效的正确过滤出来，无效的给出错误提示
        if (vnode.type !== Tab) {
            console.error('Tabs的子标签必须是Tab');
            return false;
        }
        return true;
    });
});

// 注意valiTabs是计算属性，要取value值才是数组
// 如果没有有效的 Tab 组件，抛出错误
if (!validTabs.value.length && defaultSlotContent) {
    throw new Error('Tabs组件中必须包含至少一个有效的 Tab 子组件');
}

const titles = validTabs.value.map(element => {
    const { props } = element;
    return props.title
});
// 每个 VNode 包含了传递给它的所有属性，包括 props、事件监听器等。即使你在 Tab 组件中没有显式定义 props，父组件仍然可以通过 VNode 访问这些属性
// 但是为了编译过程不出错建议显式地声明Tab的props：title
const current = computed(() =>
    // computed 计算属性在 Vue 中是基于依赖追踪机制的。它只会在其依赖的响应式变量发生变化时重新执行，而不会因为非响应式变量的变化或其他原因重新计算
    validTabs.value.filter((tab) => {
        return tab.props.title === selected?.value
    })[0]
)

const updateTab = (e) => {
    emit('update:selected', e.target.textContent)
    // nextTick用来保证组件更新完再执行里面的函数
    nextTick(() => {
        getUpdateBar()
    })

}

const barstyle = reactive({
    left: '0px',
    width: '100px'
})
// const xxx = (el) => {
//     console.log(el, barstyle)
//     if(el.textContent === selected?.value){
//         barstyle.left = el.offsetLeft + 'px'
//         barstyle.width = el.offsetWidth + 'px'
//         console.log(el.offsetLeft,el.offsetWidth, barstyle)
//     }
// }
// 这种写法会导致初始化的bar宽度为0，以为此时dom还没渲染

const selectedItem = ref<HTMLDivElement>()

const getUpdateBar = () => {
        barstyle.left = selectedItem.value?.offsetLeft + 'px'
        barstyle.width = selectedItem.value?.offsetWidth + 'px'
}
// watcheffect相当于onmounted+onupdated,但是我在这里使用时达不到预期，原因是watcheffect在挂载之前也会执行，这个时候selected还是空的，所以可以添加一个判断语句让它不为空时再执行
onMounted(
    () => {
        getUpdateBar()
    }
)


</script>
<style lang="scss">
$blue: #409eff;

.gulu-tabs-titles {
    display: flex;
    position: relative;
    border-bottom: 1px solid #ccc;
}
.gulu-tabs-bar {
    height: 2px;
    position: absolute;
    background-color: $blue;
    bottom: -1px;
    border-bottom: 1px solid $blue;
    transition: all 250ms;
}

.gulu-tabs-title {
    width: 100px;
    text-align: center;
    padding: 1em 0;
    cursor: pointer;

    &.selected {
        color: $blue;
    }

    // 举一反三哈哈哈
}
</style>