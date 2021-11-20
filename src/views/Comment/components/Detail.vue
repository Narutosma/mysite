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
        <CommentForm @submit="handle" :reply="this.reply"/>
        <CommentMessage v-loading="loading" :list="commentList" :replyHandle="replyHandle"/>
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
            loading: false,
            reply: null
        }
    },
    methods: {
        // 新增评论
        async handle(formDate, callback){
            console.log(this.commentList);
            let res;
            if(!this.reply){
                // 如果reply 没有值就是新增评论， 有就是回复
                res = await commentApi.addComment(formDate.name, formDate.content);        
                this.commentList.rows.unshift(res[0]);        
            }else{
                res = await commentApi.replyComment(this.reply.id, formDate.name, formDate.content);
                const index = this.commentList.rows.indexOf(this.reply);
                this.commentList.rows[index].children.unshift(res[0]);
            }
            this.commentList.total++;
            
            // 在新增评论后执行callback
            callback && callback("评论成功");
            this.reply = null;
        },
        // 点击回复跳到回复框
        replyHandle(item){
            // data-form-container
            this.$el.querySelector("#data-form-container").scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
            this.reply = item;
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
@import "~@/styles/mixins.less";
.comment-detail-container{
    padding: 15px;
    .toUpAnimate;
}
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