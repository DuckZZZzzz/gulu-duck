<template>
    <div class="topnav">
        <router-link to="/" class="logo">LOGO</router-link>
        <div class="menu">
            <span>菜单1</span>
            <span>菜单2</span>
        </div>
    </div>
</template>
<script setup>
</script>
<style scoped>
    .topnav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        background: #dec3c3;
        line-height: 50px;
        text-align: center;
    }
    .logo, .menu {
        width: 100px;
        height: 50px;
    }
    .menu {
        width: 150px;
        height: 50px;
        display: flex;
        justify-content: space-around;
    }

</style>