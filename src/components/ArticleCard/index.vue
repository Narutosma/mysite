<template>
    <!--  right用来设置图片位置  -->
    <div
            class="article-card"
            :class="{ right: index % 2 === 1}"
    >
        <div class="image">
            <img v-lazy:src="article.thumb" alt="" />
        </div>
        <div class="info">
            <div class="release-time">
                <SymbolIcon href="time"/>发布于
                <span class="time"> {{ formatDate(article.createDate) }}</span>
            </div>
            <RouterLink :to="{name: 'article', params: {id: article.id}}" href="" class="title">{{ article.title }}</RouterLink>
            <div class="post">
                <SymbolIcon href="hot"/> {{ article.scanNumber }} <SymbolIcon href="foot"/>
                {{ article.commentNumber }}
                <SymbolIcon href="valor"/>
                {{ article.category.name }}
            </div>
            <p class="introduction">
                {{ article.description }}
            </p>
            <div class="icon" :class="{ right: !index % 2 === 1 }">
                <i class="iconfont icon-b27"></i>
            </div>
        </div>
    </div>
</template>

<script>
    // import Icon from "@/components/Icon";
    import { formatDate } from "@/utils";
    import SymbolIcon from "@/components/Symbol"
    export default {
        props: {
            article: {
                type: Object,
                require: true
            },
            index: {
                type: Number,
                require: true
            }
        },
        methods: {
            formatDate
        },
        components: {
            // Icon,
            SymbolIcon
        }
    }
</script>

<style scoped lang="less">

    @import "~@/styles/var.less";

    @duration: all 0.6s;
    .article-card {
        width: 100%;
        height: 300px;
        border-radius: 10px;
        overflow: hidden;
        margin: 50px 0;
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
        transition: @duration;
        animation: cardShow 0.5s;
        display: flex;
        &.right {
            flex-direction: row-reverse;

            .info {
                text-align: left;
            }

            .post {
                justify-content: start;

                .svg-icon {
                    margin-left: 8px;
                    &:nth-of-type(1) {
                        margin-left: 0;
                    }
                }
            }
        }
        &:hover {
            box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.5);
            img {
                transform: scale(1.1);
            }
        }
    }

    // 出场动画
    @keyframes cardShow{
        0%{
            opacity: 0;
            transform: translateY(80px);
        }
        100%{
            opacity: 1;
            transform: translateY(0px);
        }
    }

    .image {
        flex: 1 1 53%;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: @duration;
        }
    }

    .info {
        flex: 1 1 40%;
        display: flex;
        flex-direction: column;
        padding: 20px 30px;
        box-sizing: border-box;
        text-align: right;

        .svg-icon{
            width: 15px;
            height: 15px;
        }

        .release-time {
            display: inline-block;
            .time {
                margin-left: 5px;
            }
        }
        .title {
            font-size: 18px;
            margin: 18px 0;
            display: block;
        }

        .introduction {
            margin: 18px 0;
            height: 72px;
            display: block;
            color: @dark;
            font-size: 16px;
            text-align: left;
            word-break: break-all;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            line-height: 1.5;
        }
        .post {
            font-size: 12px;
            color: @lightWords;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            .svg-icon{
                margin-left: 10px;
                margin-right: 2px;
            }
        }
    }

    .release-time {
        font-size: 12px;
        color: @lightWords;
        display: flex;
        align-items: center;
    }

    .icon {
        .iconfont {
            font-size: 32px;
        }
        &.right {
            text-align: right;
        }
    }
</style>