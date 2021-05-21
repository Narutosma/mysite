<template>
  <i class="icon-container iconfont" :class="icon"></i>
</template>

<script>
const iconMap = {
    tag: "icon-biaoqian",
    edit: "icon-mingmingkaobei2",
    list: "icon-renwu",
    happy: "icon-gaoxing",
    huangguan: "icon-huangguan",
    warm: "icon-jinggao",
    target: "icon-mubiao",
    collect: "icon-b28",
    book: "icon-zhishidian",
    home: "icon-shouye_huaban1",
    bilibili: "icon-icon_bilibili",
    git: "icon-icon_github-circle",
    qq: "icon-icon_qq-circle",
    bilibili2: "icon-icon_bilibili-circle",
    qq2: "icon-icon_qq",
    weixin: "icon-icon_wechat",
    user: "icon-b3",
    add: "icon-b1",
    time: "icon-b8",
    error: "icon-b9",
    img: "icon-b16",
    search: "icon-b22",
    more: "icon-b27",
    good: "icon-b24",
    del: "icon-b19",
    link: "icon-b23",
    shuaxin: "icon-b10",
    downArror: "icon-xiajiantou",
    hot: "icon-redu",
    message: "icon-xinxi2_1"
}
export const map = Object.keys(iconMap);
export default {
    props: {
        type: {
            type: String,
            require: true
        }
    },
    data(){
        return {
            icon: iconMap[this.type]
        }
    }
}
</script>

<style lang="less" scoped>
    @import "//at.alicdn.com/t/font_2457717_se1dyid75id.css";

    .icon-container{
        font-size: inherit;
    }
</style>