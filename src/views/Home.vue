<template>
    <div class="bg">
        <Topnav :togglemenuBtnVisible="false" />
        <div class="banner">
            <h1>Duck UI</h1>
            <h2>一个厉害的UI框架</h2>
            <p class="actions">
                <a href="https://github.com/" target="_blank">GitHub</a>
                <a href="https://gitee.com/duckZzzzzz/vue3-gulu" target="_blank">Gitee</a>
                <router-link to="/doc">开始</router-link>
            </p>
        </div>
    </div>
    <div class="features">
        <ul>
            <li><svg>
                    <use xlink:href="#icon-Vue"></use>
                </svg>
                <h3>基于 Vue 3</h3>
                <p>骄傲地使用了 Vue 3 Composition API</p>
            </li>
            <li><svg>
                    <use xlink:href="#icon-typescript"></use>
                </svg>
                <h3>基于TypeScript</h3>
                <p>源代码采用TypeScript书写</p>
            </li>
            <li><svg>
                    <use xlink:href="#icon-smarty"></use>
                </svg>
                <h3>代码易读</h3>
                <p>每个组件的源代码都极其简洁</p>
            </li>
        </ul>
    </div>

</template>

<script setup lang="ts">
import Topnav from '../components/Topnav.vue'
</script>

<style lang="scss" scoped>
.bg {
    background: linear-gradient(26deg, #B7FFFC, #FDDFEA);
    clip-path: ellipse(80% 60% at 50% 40%);

    .banner {

        h1{
            margin-bottom: 0;
            font-size: 50px;
        }
        h2 {
            margin-bottom: 0;
            font-size: 30px;

        }

        padding: 50px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #012d2f;

        >.actions {
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
}

.features {
    margin: 64px auto;
    width: 400px;

    @media (min-width: 800px) {
        width: 800px;
    }

    @media (min-width: 1200px) {
        width: 1200px;
    }

    ul {
        display: flex;
        flex-wrap: wrap;

        >li {
            width: 400px;
            margin: 16px 0;
            display: grid;
            justify-content: start;
            align-content: space-between;
            grid-template-areas:
                "icon title"
                "icon text";
            grid-template-columns: 80px auto;
            grid-gap: 8px;

            svg {
                grid-area: icon;
                width: 80px;
                height: 80px;
            }

            h3 {
                grid-area: title;
                font-size: 28px;
                margin: 0;
            }

            p {
                grid-area: text;
            }
        }
    }
}
</style>