<template>
  <div class="image-banner-container">
    <img class="banner" :src="url" draggable="false" alt="">
    <span v-if="!$route.meta.article" class="comment-text">{{ title }}</span>
    <div v-else class="article-title">
      <h2 class="title">{{ title.title }}</h2>
      <div class="info">
        <img :src="title.avatar">
        {{ title.name }} · {{ releaseTime(title.createDate) }} · {{ title.views }}次游览
      </div>
    </div>
  </div>
</template>

<script>
  import { releaseTime } from '@/utils'
export default {
    props: {
        url: {
            type: String,
            require: true
        },
        title: {
            require: true
        }
    },
    methods: {
      releaseTime
    }
}
</script>

<style lang="less" scoped>
    @import "~@/styles/mixins.less";
    .image-banner-container{
        width: 100%;
        position: relative;
        .toDownAnimate;
        img.banner{text-shadow: 2px 2px 10px #000;
            width: 100%;
            height: 450px;
        }
        .comment-text{
            font-size: 40px;
            .self-center();
            color: #fff;
            text-shadow: 2px 2px 10px #000;
            z-index: 1;
            letter-spacing: 8px;
        }
    }

  .article-title{
    position: absolute;
    left: 15px;
    bottom: 20px;
    font-size: 15px;
    color: #fff;
    text-shadow: 2px 2px 10px #000;

    h2{
      font-size: 34px;
      /*margin: 0 0 ;*/
      margin-bottom: 20px;
      font-weight: 400;
    }

    .info{
      height: 40px;

      img{
        width: 35px;
        height: 35px;
        border-radius: 50%;
        object-fit: cover;
        vertical-align: middle;
        margin-right: 10px;
      }
    }
  }
</style>