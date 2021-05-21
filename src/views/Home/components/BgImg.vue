<template>
  <div class="bg-img-container" ref="container" v-if="this.$route.meta.isHome">
    <img ref="image" :src="banner" alt="">
    <div class="title">
        <h2>L的个人博客</h2>
    </div>
    <span @click="handle" ><Icon type="downArror"/></span>
  </div>
</template>

<script>
import Icon from '@/components/Icon';
import banner from '@/assets/p2.jpeg';
export default {
    components:{
        Icon
    },
  data(){
    return{
      banner
    }
  },
    methods: {
        handle(){
            // 点击
            this.$bus.$emit("setMainScroll", this.$refs.image.clientHeight);
        }
    }
}
</script>

<style scoped lang="less">
   @import "~@/styles/mixins.less";

    .bg-img-container{
        width: 100%;
        height: 100vh;
        overflow: hidden;
        position: relative;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            // position: fixed;
            top: 0;
            left: 0;
            // z-index: -1;
            object-fit: cover;
        }

        .title{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
            font-size: 38px;
            text-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
            cursor: pointer;
            letter-spacing: 1.2rem;
        }
    }

    .icon-container{
        position: absolute;
        font-size: 50px;
        z-index: 5;
        left: 50%;
        transform: translateX(-50%);
        bottom: 20px;
        cursor: pointer;
        color: #fff;
        animation: updown 2s linear infinite;
    }

    @keyframes updown{
        0%{
            transform: translate(-50%, 8px);
            
        }
        50%{
            transform: translate(-50%, 0);
        }
        100%{
             transform: translate(-50%, 8px);
        }
    }
</style>