<template>
  <div class="article-list-container" v-loading="loading">
    <h3><SymbolIcon href="shandian"/>文章列表</h3>
    <Article v-for="(item, index) in list" :key="item.id" :article="item" :index="index"/>
    <More @loadingPage="morePage" v-if="list.length < total"/>
  </div>
</template>

<script>
import More from "@/components/More";
import Article from "@/components/ArticleCard";
import { getArticles } from "@/api/article";
import SymbolIcon from "@/components/Symbol";

export default {
  components: {
    More,
    Article,
    SymbolIcon
  },
  methods: {
    // 加载更多文章
    async morePage(callback){
      // 显示加载组件
      this.page++;
      const resp = await getArticles(this.page, this.limit);
      this.list = this.list.concat(resp.rows);
      callback();
    }
  },
  data() {
    return {
      list: {},
      total: 0,
      page: 1,
      limit: 5,
      loading: false
    };
  },
  async mounted() {
    this.loading = true;
    const res = await getArticles(this.page, this.limit);
    this.list = res.rows;
    this.total = res.total;
    this.loading = false;
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.article-list-container {
  position: relative;
  margin-top: 40px;
}
h3 {
  font-size: 18px;
  border-bottom: 1px dashed @lightWords;
  line-height: 40px;
  color: #f6f8fa;
}
.article-card-container {
  margin-top: 50px;
}
</style>