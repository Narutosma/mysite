<template>
  <div class="comment-message-container">
      <h2 class="title">Comments | <span>{{ list.total }}条</span></h2>
      <ul class="comment-message" id="CommentMessage">
          <li class="message" v-for="comment in list.rows" :key="comment.id">
              <div class="comment-info">
                  <div class="user-info">
                    <img class="user-avater" :src="comment.avatar" alt="">
                    <div class="info">
                        <span class="name">{{ comment.nickname }}</span>
                        <span class="time">发布于 {{ releaseTime(comment.createDate) }}</span>
                    </div>
                    </div>
                    <p class="content">
                        {{ comment.content }}
                    </p>
                    <span class="reply" @click="replyHandle(comment)">回复</span>
              </div>
              <!-- 回复信息 -->
              <div class="reply-info" v-for="reply in comment.children" :key="reply.id">
                  <div class="user-info">
                  <img class="user-avater" :src="reply.avatar" alt="">
                    <div class="info">
                        <span class="name">{{ reply.nickname }}</span>
                        <span class="time">回复于 {{ releaseTime(reply.createDate) }}</span>
                    </div>
                  </div>
                    <p class="content">
                        {{ reply.content }}
                    </p>
                    <!-- 有点问题暂时不处理 -->
                    <!-- <span class="reply" @click="replyHandle(reply)">回复</span> -->
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
// 评论列表组件
import { releaseTime } from "@/utils";
export default {
    name: "Comment",
    props: {
        list: {
            type: Object,
            require: true
        },
        replyHandle: {
            type: Function
        }
    },
    methods: {
        releaseTime
    }

}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

    .comment-message{
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .message{
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        margin-top: 25px;
        margin-bottom: 5px;
    }
    .comment-info,
    .reply-info{
        /*padding-bottom: 25px;*/
        
        position: relative;
        
        .user-info{
            display: flex;
            align-items: center;
            img{
                width: 40px;
                height: 40px;
                object-fit: cover;
                border-radius: 50%;
            }

            .info{
                margin-left: 15px;

                .name{
                    font-size: 18px;
                    color: @link;
                }

                .time{
                    font-size: 12px;
                    margin-left: 20px;
                    color: @lightWords;
                }
            }
        }
        .content{
            /*border-bottom: 1px solid rgba(0, 0, 0, 0.05);*/
            font-size: 14px;
            line-height: 30px;
            margin-top: 15px;
            padding-bottom: 20px;
            padding-left: 3px;
            color: @lightWords;
        }

         // 回复
        .reply{
            position: absolute;
            right: 10px;
            top: 10px;
            font-size: 12px;
            background: @link;
            padding: 5px 16px;
            border-radius: 5px;
            color: #fff;
            cursor: pointer;
            transition: 0.3s;
            transform: scaleX(0);
            transform-origin: left;
        }
        &:hover{
            .reply{
                transform: scaleX(1);
            }
        }
    }
    
    .reply-info{
        padding-left: 60px;
    }   

     

</style>