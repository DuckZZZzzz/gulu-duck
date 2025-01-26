<template>
    <aside v-if="menuvisible">
        <h2>文档</h2>
        <ol class="list">
            <li>
                <router-link to="/doc/intro">介绍</router-link>
            </li>
            <li>
                <router-link to="/doc/installation">安装</router-link>
            </li>
            <li>
                <router-link to="/doc/get-started">开始使用</router-link>
            </li>
        </ol>
        <h2>组件列表</h2>
        <ol class="list">
            <li>
                <router-link to="/doc/switch">Switch组件</router-link>
            </li>
            <li>
                <router-link to="/doc/button">button组件</router-link>
            </li>
            <li>
                <router-link to="/doc/dialog">Dialog组件</router-link>
            </li>
            <li>
                <router-link to="/doc/tabs">Tabs组件</router-link>
            </li>

        </ol>
    </aside>
</template>

<script setup lang="ts">
import { inject, Ref } from 'vue';
const menuvisible = inject<Ref<boolean>>('menuvisible') as Ref<boolean>
</script>

<style lang="scss" scoped>
aside {
    white-space: nowrap;
    // padding: 30px;
    border-right: 1px solid #ccc;

    h2 {
        padding: 10px 30px;
        margin: 0 auto;
    }

    ol {
        margin: 0;

        li {
            padding: 0;
            a {
                box-sizing: border-box;
                display: inline-block;
                width: 100%;
                height: 100%;
                padding: 5px 30px;
            }
        }
    }
}

.router-link-active {
    background-color: #CFF4F5;
}
</style>