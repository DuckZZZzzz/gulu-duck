<template>
        <Topnav />
        <div class="content">
            <Aside />
            <main>
                <router-view />
            </main>
        </div>
</template>

<script setup lang="ts">
import Topnav from "../components/Topnav.vue";
import Aside from "../components/Aside.vue";

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
        border-right: 1px solid #ccc;
        >h2{
            margin-bottom: 4px;
        }
        >.list {
            height: 85%;
            overflow: auto;
        }
    }
    main{
        flex: 1;
        padding: 16px;
        overflow: auto;
    }
}

</style>