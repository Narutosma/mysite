<template>
  <div id="app">
    <Layout>
      <template #nav>
          <div class="header">
            <HeaderC />
          </div>
      </template>
      <div class="main" ref="container">
        <!-- Home -->
        <transition :duration="400" enter-active-class="animate__fadeIn" leave-active-class="animate__fadeOut" mode="out-in">
           <router-view class="animate__animated"></router-view>
        </transition>
      </div>
    </Layout>
    <Footer />
    <!-- 回到顶部组件 -->
    <ToTop />
  </div>
</template>

<script>
import Layout from '@/components/Layout';
import HeaderC from '@/components/HeaderC';
import ToTop from '@/components/ToTop';
// import BgImg from '@/views/Home/components/BgImg';
import Footer from "@/components/Footer";
export default {
  components: {
    Layout,
    HeaderC,
    ToTop,
    Footer
  },
  data(){
    return{
      timer: null
    }
  },
  methods: {
    scrollHandle(){
      this.$bus.$emit("mainScroll");
    },
    setMainScroll(top){
      // this.$refs.container.scrollTop = top;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  },
  mounted(){
    this.$bus.$on("setMainScroll", this.setMainScroll);
    // this.$refs.container.addEventListener("scroll", this.scrollHandle);
    addEventListener("scroll",  this.scrollHandle);
  },
  beforeDestroy(){
    this.$bus.$off("setMainScroll", this.setMainScroll);
    // this.$refs.container.removeEventListener("scroll", this.scrollHandle);
    removeEventListener("scroll", this.scrollHandle);
  }
}
</script>

<style lang="less">
body{
  margin: 0;
}
.header{
  height: 75px;
}
</style>
