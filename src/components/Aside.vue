<template>
    <aside v-if="menuvisible" >
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
const menuvisible =  inject<Ref<boolean>>('menuvisible') as Ref<boolean>
</script>

<style lang="scss" scoped>
aside{

white-space: nowrap;
padding: 30px;
}

</style>