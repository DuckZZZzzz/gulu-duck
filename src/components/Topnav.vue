<template>
    <div class="topnav">
        <span class="toggleAside"  @click="togglemenu">|||</span>
        <div class="logo">LOGO</div>
        <ul class="menu">
            <li>菜单1</li>
            <li>菜单2</li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import { inject, Ref } from 'vue';
const menuvisible = inject<Ref<boolean>>('menuvisible') as Ref<boolean>
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
    position: relative;
    z-index: 10;
    padding: 16px;
    background: #dec3c3;
    display: flex;
    justify-content: center;
    align-items: center;
    .toggleAside {
        display: none;
    }
    .logo {
        max-width: 6em;
        margin-right: auto;
        /* margin: auto可以让一个设置了宽度的盒子在父容器内水平居中，如果还有其他元素，就在剩余空间中左右居中 */
        /* 但是注意 margin: auto; 仅能自动分配左右外边距以实现水平居中，如果想要同时实现垂直居中，建议使用 Flexbox 或 Grid 布局*/
        /* margin-right: auto会把元素推到父容器的最左边 */
    }

    .menu {
        display: flex;
        white-space: nowrap;
        /* 文本不换行 */
        flex-wrap: nowrap;

        /* 弹性盒子不换行 */
        >li {
            margin: 0 1em;
        }
    }


    @media (max-width: 500px) {
        .toggleAside {
        display: block;
    }
        >.menu {
            display: none;
        }

        >.logo {
            margin: 0 auto;
        }
    }

}
</style>