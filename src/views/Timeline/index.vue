<template>
    <div class="time-line-container" v-loading="loading">
        <ImageBanner :url="Banner" title="时光轴"/>
        <ul class="time-line">
            <!-- 循环遍历 -->
            <li class="time-list" v-for="item in list" :key="item.id">
                <h2 @click="handle"><Icon type="list"/>{{ item.month }}</h2>
                <!-- 循环遍历 日期内的每一项文章 -->
                <ArticleTitle :list="item.children"/>
            </li>
        </ul>
    </div>
</template>

<script>
    import ImageBanner from "@/components/ImageBanner";
    import Banner from "@/assets/comment-img.png";
    // import ArticleList from "./components/ArticleList";
    import ArticleTitle from './components/ArticleList'
    import Icon from "@/components/Icon";
    import { getArticlesByDate } from "@/api/article";
    export default {
        components: {
            ImageBanner,
            Icon,
            ArticleTitle
        },
        data(){
            return{
                Banner,
                list: [],
                loading: false
            }
        },
        methods: {
            handle(){
                console.log("收缩");
            }
        },
        async created() {
            this.loading = true;
            // 发送请求得到数据
            this.list = await getArticlesByDate();
            this.loading = false;
        }
    }
</script>

<style scoped lang="less">
    @import "~@/styles/mixins.less";
    .time-line-container{
        .container-center();
    }



    /* 时间轴 */
    .time-line{
        margin: 50px 0 0 0;
        padding: 0;
        list-style: none;
        position: relative;

        /* 总轴 */
        &::before{
            content: "";
            display: block;
            height: 100%;
            width: 1px;
            position: absolute;
            background: red;
        }

        li.time-list{
            width: 100%;
            box-sizing: border-box;
            padding-bottom: 30px;
            h2{
                margin: 20px 0 20px 30px;

                .iconfont{
                    position: absolute;
                    left: -18px;
                    font-size: 16px;
                    width: 36px;
                    height: 36px;
                    background: red;
                    border-radius: 50%;
                    text-align: center;
                    line-height: 36px;
                    color: #fff;
                }
            }
        }
    }
</style>