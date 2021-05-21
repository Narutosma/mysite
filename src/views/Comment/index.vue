<template>
  <div class="comment-container">
      <ImageBanner :url="url" title="留言板"/>
      <div class="poetry">
        <div class="sc">
          <h1>念两句诗</h1>
          <p>与君歌一曲， 请君为我倾耳听</p>
          <p>李白 《将进酒》</p>
        </div>
      </div>
      <div class="comment">
        <Comment />
      </div>
  </div>
</template>

<script>
import ImageBanner from '@/components/ImageBanner';
import banner from '@/assets/comment-img.png';
import Comment from './components/Detail'
export default {
  components: {
    ImageBanner,
    Comment
  },
  data(){
    return {
      url: banner
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/mixins.less";
@import "~@/styles/var.less";
.comment-container{
  .container-center();
}

.poetry{
  width: 100%;
}

.sc{
    width: 80%;
    margin: 80px auto;
    border: 2px solid @lightWords;
    border-top: none;
    text-align: center;
    position: relative;
    // 标题左右的两条线
    &::before,
    &::after{
      content: "";
      display: block;
      height: 2px;
      width: 28%;
      position: absolute;
      top: 0;
      background: @lightWords;
    }

    &::before{
      left: 0;
    }
    &::after{
      right: 0;
    }

    h1{
      margin-top: -20px;
      display: inline-block;
      letter-spacing: 4px;
      color: @lightWords; 
    }
    p{
      margin: auto;
      color: @lightWords;
    }

    p:first-of-type{
      font-size: 25px;
    }
    p:last-of-type{
      margin: 15px auto;
    }
}

</style>