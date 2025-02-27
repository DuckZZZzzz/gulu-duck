<template>
    <div>
        <h1>Button示例</h1>
        <Demo :sourceDemo="ButtonSourceDemo" />
        <Demo :sourceDemo="ButtonSourceDemo2" />
        <Demo :sourceDemo="ButtonSourceDemo3" />
        <Demo :sourceDemo="ButtonSourceDemo4" />
        <Demo :sourceDemo="ButtonSourceDemo5" />
    </div>
</template>

<script setup lang="ts">
import ButtonSourceDemo from './sourceDemo/ButtonSourceDemo.vue';
import ButtonSourceDemo2 from './sourceDemo/ButtonSourceDemo2.vue';
import ButtonSourceDemo3 from './sourceDemo/ButtonSourceDemo3.vue';
import ButtonSourceDemo4 from './sourceDemo/ButtonSourceDemo4.vue';
import ButtonSourceDemo5 from './sourceDemo/ButtonSourceDemo5.vue';
import Demo from './Demo.vue';
// 因为非prop属性会直接透传，所以Button组件支持click mouseover focus等事件

</script>

<style lang="scss" scoped>
div{
    margin: 25px 0;
}
</style>