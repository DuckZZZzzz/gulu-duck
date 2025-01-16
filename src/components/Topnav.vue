<template>
    <div class="topnav">
        <!-- <router-link to="/" class="logo">LOGO</router-link> -->
         <div class="toggle" @click="togglemenu">|||</div>
        <div class="menu">
            <span>菜单1</span>
            <span>菜单2</span>
        </div>
    </div>
</template>
<script setup lang="ts">
import { inject, Ref } from 'vue';
const menuvisible =  inject<Ref<boolean>>('menuvisible') as Ref<boolean>
    // 为什么需要同时使用泛型 <Ref<boolean>> 和类型断言 as Ref<boolean>，这实际上是出于两个不同的目的
    // 泛型：主要用于静态类型检查，帮助你在编写代码时捕捉潜在错误。
    // 断言：用于运行时的行为，确保即使在某些情况下 TypeScript 无法确认类型，你的代码仍然能够正常工作
    // 比如这里如果不写断言，menuvisible也许会是undefined，如果你确定 menuvisible 一定不会是 undefined，可以使用非空断言操作符 ! 来代替显式的类型断言
    console.log(menuvisible);
    
   const togglemenu = () => {
    menuvisible.value = !menuvisible.value
    }
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