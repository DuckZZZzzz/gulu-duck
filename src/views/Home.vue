<template>
        <Topnav />
        <div class="banner">
            <h1>Duck UI</h1>
            <h2>一个厉害的UI框架</h2>
            <p class="actions">
                <a href="https://github.com/">GitHub</a>
                <router-link to="/doc">开始</router-link>
            </p>
        </div>

</template>

<script setup lang="ts">
import Topnav from '../components/Topnav.vue'
</script>

<style lang="scss" scoped>
.banner {
    padding: 150px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(26deg, #B7FFFC, #FDDFEA);
    color: #012d2f;
    > .actions {
        padding: 8px 0;
        a {
            cursor: pointer;
            margin: 0 8px;
            background: white;
            color: #000000;
            display: inline-block;
            padding: 8px 24px;
            border-radius: 4px;
                text-decoration: none;
                &:hover {
                    color: #500229;
                }
        }
    }
}
</style>