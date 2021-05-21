<template>
  <div class="comment-detail-container">
       <div class="intro">
           <h2>嘿! 朋友</h2>
           <p>
               既然来了何不留个痕迹在溜
               <br>
               非常期待你留下的脚印
           </p>
       </div>
       <CommentForm @submit="handle"/>
      <CommentMessage v-loading="loading" :list="commentList"/>
  </div>
</template>

<script>
import CommentForm from '@/components/Comment/CommentForm';
import CommentMessage from '@/components/Comment/CommentMessage';
import * as commentApi from "@/api/comment";
export default {
    components: {
        CommentMessage,
        CommentForm
    },
    data(){
        return {
            commentList: {},
            page: 1,
            limit: 5,
            loading: false
        }
    },
    methods: {
        // 新增评论
        async handle(name, content, callback){
            const res = await commentApi.addComment(name, content);
            this.total++;
            this.commentList.unshift(res[0]);
            // 在新增评论后执行callback
            callback && callback();
        }
    },
    async created(){
        this.loading = true;
        // 获取评论列表
        const res = await commentApi.getCommentList(this.page, this.limit);
        this.commentList = res;
        this.loading = false;
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
    .title{
        color: #7d7d7d;
        font-size: 18px;
        margin: 40px 0;
        span{
            color: #909090;
            font-size: 12px;
        }
    }

    .intro{
        h2{
            font-size: 18px;
            padding: 10px 0;
            color: #7d7d7d;
            border-bottom: 1px dashed #ddd;

            &::before{
                content: "#";
                color: #FF6D6D;
                margin-right: 10px;
            }
        }
    }
</style>