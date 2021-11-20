<template>
    <div class="article-comment-container">
        <h2 class="liuyan">留言</h2>
        <CommentForm @submit="handle"/>
        <CommentMessage :list="list"/>

<!--        <Comment @submit="handle" :list="list"/>-->
    </div>
</template>

<script>
    import CommentForm from '@/components/Comment/CommentForm';
    import CommentMessage from '@/components/Comment/CommentMessage';
    // import Comment from "@/components/Comment";
    import { addComment, getCommentList } from '@/api/comment';
    export default {
        components: {
            CommentForm,
            CommentMessage,
            // Comment
        },
        data(){
            return{
                list: {}
            }
        },
        methods: {
            async handle(formDate, callback){
                const res = await addComment(formDate.name, formDate.content);
                this.list.rows.unshift(res[0]);
                this.list.total++;
                // 在新增评论后执行callback
                callback && callback("评论成功");
          }
        },
        async created() {
            const res = await getCommentList();
            this.list = res;
        }
    }
</script>

<style scoped lang="less">
    .article-comment-container{
        margin-top: 100px;
        padding: 15px;
        
    }

    .liuyan{
        font-size: 18px;
        padding: 10px 0;
        color: #7d7d7d;
        border-bottom: 1px dashed #ddd;
    }

</style>