// VueRouter 
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from '@/views/Home/index.vue';

const routes = [
    //  主页
    {
      name: "home",
      path: "/",
      meta: {
        isHome: true
      },
      component: Home
    },
    // 留言版
    {
      name: "comment",
      path: "/comment",
      component: () => import("@/views/Comment")
    },
    // 时间轴
    {
        name: "timeline",
        path: "/timeline",
        component: () => import("@/views/Timeline")
    },
    // 项目效果
    {
        name: "effect",
        path: "/effect",
        component: () => import("@/views/Effect")
    },
    // 文章内容
    {
        name: "article",
        path: "/article/:id",
        meta: {
          article: true
        },
        component: () => import("@/views/Article")
    },
    // 文章分类
    {
        name: "articleCategory",
        path: "/article/cate/:id",
        component: () => import("@/views/ArticleCategory")
    },
    // 关键字搜索
    {
        name: "articleByKey",
        path: "/article",
        component: () => import("@/views/ArticleCategory")
    }
];

export default new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior(to, from, savePosition){
        if(savePosition){
            return savePosition;
        }
        return {
            x: 0,
            y: 0
        }
    }
});
