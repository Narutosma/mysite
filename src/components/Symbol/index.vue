
<!-- 图标 -->
<template>
    <svg class="svg-icon" aria-hidden="true">
        <use :xlink:href="className" />
    </svg>
</template>

<script>
    const map = {
        home: "icon-crown",
        clock: "icon-clock",
        duck: "icon-psyduck",
        wugui: "icon-squirtle",
        xiaohuolong: "icon-charmander",
        labaya: "icon-bellsprout",
        cat: "icon-meowth",
        yibu: "icon-eevee",
        ball: "icon-pokemon",
        valor: "icon-valor-",
        shandian: "icon-instinct",
        time: "icon-clock",
        hot: "icon-valor",
        foot: "icon-pawprints"
    };
    export default {
        props: {
            href: {
                String: true,
                require: true
            }
        },
        computed: {
            className(){
                return `#${map[this.href]}`;
            }
        }
    }
</script>

<style scoped lang="less">
    .svg-icon{
        fill: currentColor;
        overflow: hidden;
        width: 18px;
        height: 18px;
        vertical-align: -2px;
        margin-right: 5px;
        transition: all 0.5s;
    }

</style>