<template>
    <div class="article-category-container" v-loading="loading">
        <ImageBanner :url="Banner" :title="cateName"/>
        <Article v-for="(article, index) in list" :article="article" :index="index" :key="article.id"/>
        <More @loadingPage="handle" v-if="list.length < total"/>
    </div>
</template>

<script>
    import Article from "@/components/ArticleCard";
    import More from "@/components/More";
    import { getArticles } from "@/api/article";
    import ImageBanner from '@/components/ImageBanner';
    import Banner from "@/assets/comment-img.png";
    export default {
       components: {
           Article,
           More,
           ImageBanner
       },
        data() {
            return {
                list: [],
                total: 0,
                page: 1,
                limit: 5,
                cateName: "",
                loading: false,
                Banner
            };
        },
        computed: {
            // 获得分类id
            cateId(){
                return this.$route.params.id;
            },
            // 获得关键字
            keyWord(){
                return this.$route.query.key;
            }
        },
        methods: {
            async handle(cb){
                this.page++;
                const resp = await getArticles(this.page, this.limit);
                this.list = this.list.concat(resp.rows);
                cb();
            },
            async getDate(){
                const res = await getArticles(this.page, this.limit, this.cateId, this.keyWord);
                this.loading = false;
                this.list = res.rows;
                this.total = res.total;
                // 得到分类名
                this.cateName = this.keyWord ? `搜索"${this.keyWord}"的结果`: "" || this.list[0].category.name;
            }
        },
        mounted() {
           this.loading = true;
           // 初始化数据
            this.getDate();
        },
        watch: {
           "$route": async function(){
              this.getDate();
           }
        }
    }
</script>

<style scoped lang="less">
    @import "~@/styles/mixins.less";

    .article-category-container{
        .container-center();
    }

    h2{
        font-size: 18px;
        color: #504e4e;
        border-bottom: 1px dashed #787878;
        line-height: 40px;
    }

</style>