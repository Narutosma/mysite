<template>
    <div class="effect-container">
        <ImageBanner :url="banner" title="项目&效果"/>
        <ul class="effect-list">
            <li class="item">
                <a class="title" href="file:///Users/linke/Desktop/mysite/src/project/loading/index.html" target="_blank">Loading <span>github</span></a>
                <div class="description">css3 loading效果</div>
            </li>
            <li class="item" v-for="i in 5" :key="i">
                <a class="title" href="https://github.com/" target="_blank">项目名称 <span>github</span></a>
                <div class="description">迪昂亩描述</div>
            </li>
        </ul>
    </div>
</template>

<script>
    import ImageBanner from '@/components/ImageBanner';
    import banner from '@/assets/comment-img.png';
    export default {
        components: {
            ImageBanner
        },
        data(){
            return {
                banner
            }
        }
    }
</script>

<style scoped lang="less">
    @import "~@/styles/mixins.less";
    .effect-container{
        .container-center();
    }

    .effect-list{
        margin: 40px 0 0 0;
        padding: 0;
        list-style: none;

        li.item{
            padding: 20px 30px;
            border: 1px solid #f4f4f4;
            margin: 30px 0;
            border-radius: 5px;
            box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
            transition: 0.4s;
            .title{
                font-size: 24px;
                margin-bottom: 20px;
                display: inline-block;

                span{
                    font-size: 12px;
                    color: #00a1d6;
                }
            }
            &:hover{
                transform: translateY(-5px);
                box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
            }
        }
    }
</style>