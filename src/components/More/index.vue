
<!-- 加载更多 -->
<template>
  <div class="more-container">
      <a href="#" class="page-btn" :class="{'loading': loading}" @click.prevent="handle">Previous</a>
  </div>
</template>

<script>
export default {
    data(){
      return {
          loading: false
      }
    },
    methods: {
        handle(){
            this.loading = true;
            this.$emit("loadingPage", () => {
                // 当数据加载完成变成原来的样子
                this.loading = false;
            });
        }
    }

}
</script>

<style scoped lang="less">
    @import "~@/styles/var.less";
    .more-container{
        text-align: center;
        transform-style: preserve-3d;

        .page-btn{
            display: inline-block;
            width: 135px;
            height: 45px;
            line-height: 45px;
            /*padding: 13px 35px;*/
            border: 1px solid #d6d6d6;
            border-radius: 50px;
            color: #adadad;
            transform-origin: center;
            transition: all .4s;
            position: relative;

            &:hover{
                box-shadow: 0 0 4px rgb(255, 165, 0, 85%);
                color: @link;
                border: 1px solid @link;
            }

            &.loading{
                width: 45px;
                height: 45px;
                color: transparent;
                position: relative;
                background-image: linear-gradient(#eb3323 50%,#fff 50%);
                animation: loading 1.5s ease-in-out infinite 0.4s;

                &:before{
                    content: "";
                    width: 100%;
                    height: 2px;
                    background: black;
                    position: absolute;
                    top: 50%;
                    left: 0;
                    transform: translateY(-50%);
                    transition: 0.4s;
                }

                &:after{
                    content: "";
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    width: 8px;
                    height: 8px;
                    border: 2px solid black;
                    border-radius: 50%;
                    background: #fff;
                }
            }
        }
    }

    @keyframes loading {
        0%, 60%, 100%{
            transform: rotate(0);
        }
        15%{
            transform: rotate(-45deg);
        }
        30%{
            transform: rotate(45deg);
        }
        45%{
            transform: rotate(-45deg);
        }
    }

</style>