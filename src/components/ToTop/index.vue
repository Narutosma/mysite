<template>
  <div class="to-top-container" :class="{show: isShow}">
      <img src="@/assets/scroll.png" alt="" @click="goBack">
  </div>
</template>

<script>
export default {
    data(){
        return{
            isShow: false
        }
    },
    methods: {
        scrollGoBack(){
            // this.isShow = dom.scrollTop > 50;
            this.isShow = window.scrollY > 50;
        },
        // 返回页面顶部
        goBack(){
            this.$bus.$emit("setMainScroll", 0);
        }
    },
    mounted(){
        // 滚动条到一定高度展示该组件
        this.$bus.$on("mainScroll", this.scrollGoBack);
    },
    destroyed(){
        this.$bus.$off("mainScroll", this.scrollGoBack);
    }
}
</script>

<style scoped lang="less">
    .to-top-container{
        position: fixed;
        right: 40px;
        top: 0;
        height: 95%;
        cursor: pointer;
        z-index: 1;
        transform: translateY(-100%);
        transition: 0.5s;
        img{
            height: 100%;
            animation: breathe 3s infinite 0.6s;
        }
        &.show{
            transform: translateY(0);
        }
    }

    @keyframes breathe{
        0%{
            // height: 100%;
            transform: translateY(0px);
        }
        50%{
            // height: 99%;
            transform: translateY(-10px);
        }
        100%{
            // height: 100%;
            transform: translateY(0px);
        }
    }
</style>