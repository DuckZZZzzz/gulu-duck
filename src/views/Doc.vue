<template>
        <Topnav />
        <div class="content">
            <aside>
                <h2>组件列表</h2>
                <ol>
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
            <main>主内容</main>
        </div>
</template>

<script setup lang="ts">
import Topnav from "../components/Topnav.vue";
</script>

<style lang="scss" scoped>
.content{
    display: flex;
    height: 100%;
    aside{
        box-sizing: border-box;
        text-align: center;
        width: 150px;
        height: 100%;
        padding-top: 50px;
        border-right: 1px solid #ccc;
        >h2{
            margin-bottom: 4px;
        }
    }
    main{
        flex: 1;
        padding: 16px;
    }
}

</style>