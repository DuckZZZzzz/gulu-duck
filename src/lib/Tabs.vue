<template>
    <div class="gulu-tabs">
        <div class="gulu-tabs-titles">
            <div :class="{ selected: title === selected }" class="gulu-tabs-title" v-for="title in titles" :key="title"
                @click="(e) => {updateTab(e)}" :ref="el => { if(title === selected) selectedItem = el}">{{ title }}</div>
                <div class="gulu-tabs-bar" :style="barstyle"></div>
        </div>
        <component :is="current" />
    </div>
</template>

<script setup lang="ts">
import { useSlots, computed, toRefs, onMounted, ref, reactive, nextTick } from 'vue';
import Tab from './Tab.vue';

const slots = useSlots();
const defaultSlotContent = slots?.default?.();
const validTabs = computed(() => {
    if (!defaultSlotContent) return [];
    return defaultSlotContent.filter((vnode) => {
        if (vnode.type !== Tab) {
            console.error('Tabs的子标签必须是Tab');
            return false;
        }
        return true;
    });
});
if (!validTabs.value.length && defaultSlotContent) {
    throw new Error('Tabs组件中必须包含至少一个有效的 Tab 子组件');
}
const titles = validTabs.value.map(element => {
    const { props } = element;
    return props.title
});

const props = defineProps({
    selected: {
        type: String
    }
})
const { selected } = toRefs(props)
const current = computed(() =>
    validTabs.value.filter((tab) => {
        return tab.props.title === selected?.value
    })[0]
)

const emit = defineEmits(['update:selected'])
const updateTab = (e) => {
    emit('update:selected', e.target.textContent)
    nextTick(() => {
        getUpdateBar()
    })
}

const selectedItem = ref<HTMLDivElement>()
const barstyle = reactive({
    left: '0px',
    width: '100px'
})
const getUpdateBar = () => {
        barstyle.left = selectedItem.value?.offsetLeft + 'px'
        barstyle.width = selectedItem.value?.offsetWidth + 'px'
}
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

}
</style>