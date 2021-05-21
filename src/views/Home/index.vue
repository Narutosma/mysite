<template>
  <div class="home-container" ref="container">
      <BgImg />
      <div class="main-content">
        <ArticleList/>
      </div>
  </div>
</template>

<script>
import BgImg from './components/BgImg';
import ArticleList from './components/ArticleList';
export default {
  components: {
    BgImg,
    ArticleList
  }
}
</script>

<style scoped lang="less">
  @import "~@/styles/mixins.less";

  .home-container{
    background-image: url("../../assets/kyotoanimation.png");
  }

  .main-content{
    .container-center();
    
  }
</style>