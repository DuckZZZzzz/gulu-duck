<template>
    <div class="box">
        <Topnav :togglemenuBtnVisible="true" />
        <div class="content">
            <Aside />
            <main>
                <router-view />
            </main>
        </div>

    </div>
</template>

<script setup lang="ts">
import Topnav from "../components/Topnav.vue";
import Aside from "../components/Aside.vue";

</script>

<style lang="scss" scoped>
.box {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 0;
}
.content{
    // white-space: nowrap;
    flex: 1;
    //注意flex：1生效的前提是父容器高度固定
    display: flex;
    main{
        flex: 1;
        padding: 16px;
        overflow: hidden;
    }
}

</style>