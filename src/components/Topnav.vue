<template>
    <div class="topnav">
        <span class="toggleAside" @click="togglemenu" v-if="togglemenuBtnVisible">
            <svg class="icon" >
                <use xlink:href="#icon-folder"></use>
            </svg>
        </span>
        <a class="logo" href="https://duckzzzzzz.github.io/gulu-duck-ui/">
            <svg class="icon" >
                <use xlink:href="#icon-duck"></use>
            </svg>
        </a>
        <a  href="#/doc" class="menu">介绍</a>
    </div>
</template>
<script setup lang="ts">
import { inject, Ref } from 'vue';
const menuvisible = inject<Ref<boolean>>('menuvisible') as Ref<boolean>
const togglemenu = () => {
    menuvisible.value = !menuvisible.value
}
const props = defineProps({
    togglemenuBtnVisible: Boolean
})
</script>
<style lang="scss" scoped>
.topnav {
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #007974;
    padding: 16px 30px;
    box-shadow: 0 5px 5px rgb(51 51 51 / 10%);
    background: linear-gradient(145deg,#CEF5F6 0,#F3E4ED 100%);

    .toggleAside {
        display: none;
        >svg {
            width: 30px;
            height: 30px;

        }
    }

    .logo {
        max-width: 6em;
        margin-right: auto;
        /* margin: auto可以让一个设置了宽度的盒子在父容器内水平居中，如果还有其他元素，就在剩余空间中左右居中 */
        /* 但是注意 margin: auto; 仅能自动分配左右外边距以实现水平居中，如果想要同时实现垂直居中，建议使用 Flexbox 或 Grid 布局*/
        /* margin-right: auto会把元素推到父容器的最左边 */
        > .icon {
            width: 50px;
            height: 50px;
        }
    }

    .menu {
        display: flex;
        color: #007974;
        white-space: nowrap;
        /* 文本不换行 */
        flex-wrap: nowrap;
        cursor: pointer;
        /* 弹性盒子不换行 */
        >li {
            margin: 0 1em;
        }
        .doc {
            font-size: 20px;
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