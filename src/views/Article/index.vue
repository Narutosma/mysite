<template>
    <div class="article-container">
        <!-- 加载中。。。 需要修改  -->
        <div class="mask" v-if="mask">
            <img :src="pkq"/>
        </div>
        <template v-else>
            <ImageBanner v-if="titleObj" :url="banner" :title="titleObj"/>
            <div class="markdown-body" v-html="article.htmlContent"></div>
            <ArticleComment />
        </template>
    </div>
</template>

<script>
    import ImageBanner from '@/components/ImageBanner';
    import banner from "@/assets/comment-img.png";
    import { getArticle } from "@/api/article";
    import ArticleComment from "./components/ArticleComment";
    import pkq from "@/assets/pikaqiu.gif";
    // highlight样式文件
    import 'highlight.js/styles/atom-one-dark.css';
    import "@/styles/markdown.css";
    export default {
        components: {
            ImageBanner,
            ArticleComment
        },
        data(){
            return {
                banner,
                article: {},
                titleObj: null,
                pkq,
                mask: false
            }
        },
        created() {
            this.mask = true;
            getArticle(32).then( res => {
                this.article = res;
                this.titleObj = res.articleInfo;
                this.mask = false;
            });
        }
    }
</script>

<style scoped lang="less">
    @import "~@/styles/mixins.less";
    .article-container{
        .container-center();
    }

    .mask{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
        z-index: 99;
        display: flex;
        justify-content: center;
        align-items: center;

        img{
            width: 350px;
            height: 250px;
        }
    }

    .markdown-body{
        margin-top: 60px;
    }
</style>