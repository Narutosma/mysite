<template>
    <div class="article-list-container">
        <div class="time-item" v-for="article in list" :key="article.id">
            <span class="title">{{ article.title }}</span>
            <span class="release">
                <Icon type="time"/>
                {{ formatDate(article.createDate, "MM-DD") }}
            </span>
        </div>
    </div>
</template>

<script>
    import Icon from '@/components/Icon';
    import { formatDate } from "@/utils"
    export default {
        props: ["list"],
        components: {
            Icon
        },
        methods:{
            formatDate
        }
    }
</script>

<style scoped lang="less">
    @import "~@/styles/var.less";
    @bg: #f5f5f5;
    /* 每个月份 */
    .time-item {
        margin-left: 30px;
        margin-bottom: 20px;
        padding: 20px;
        box-sizing: border-box;
        border-radius: 5px;
        border: 1px solid @bg;
        position: relative;
        background: @bg;
        display: flex;
        justify-content: space-between;
        color: #7d7d7d;
        cursor: pointer;

        /* 小圆点*/

        &:before {
            content: "";
            display: block;
            position: absolute;
            left: -35px;
            top: 25px;
            width: 10px;
            height: 10px;
            background: @link;
            border-radius: 50%;
        }

        /* 倒三角 */

        &:after {
            content: "";
            display: block;
            position: absolute;
            left: -16px;
            top: 16px;
            border: 15px solid transparent;
            border-left-color: @bg;
            transform: rotate(45deg);
        }
    }

</style>