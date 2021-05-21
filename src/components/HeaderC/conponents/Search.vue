<template>
    <div class="search-container" :class="{focus: select}">
        <span class="search-icon" @click="handle"><SymbolIcon href="ball"/></span>
        <input ref="inp" v-model.trim="keyWord" type="text" @focus="select = true" @blur="select = false" placeholder="查询一下有没有你感兴趣的吧~"/>
    </div>
</template>

<script>
    import SymbolIcon from "@/components/Symbol"
    export default {
       components: {
           SymbolIcon
       },
        data(){
           return{
               select: false,
               keyWord: ""
           }
        },
        methods: {
           handle(){
               // 让input聚焦
               this.$refs.inp.focus();
           },
            searchKey(e){
               if(!this.keyWord){
                   return
               }
               // 只有在聚焦状态下才能提交
                if (e.key === "Enter" && this.select){
                    this.$router.push("/article?key=" + this.keyWord);
                    this.keyWord = "";
                }
            }
        },
        mounted() {
           addEventListener("keydown", this.searchKey);
        },
        destroyed() {
           removeEventListener("keydown", this.searchKey);
        }
    }
</script>

<style scoped lang="less">
    .search-container {
        .search-icon{
            display: inline-block;
            border: none;
            padding: 6px 15px;
            border-radius: 18px 0 0 18px;
            width: 50px;
            text-align: center;
            cursor: pointer;
            transition: all 0.5s;
            .svg-icon{
                margin: 0;
                width: 30px;
                height: 30px;


                &:hover{
                    animation: loading 1s infinite;
                }
            }
        }
        input{
            outline: none;
            width: 0;
            border-color: transparent;
            background: transparent;
            height: 41px;
            padding-left: 8px;
            font-size: 16px;
            vertical-align: bottom;
            transition: all 0.5s;
        }
        .icon-container {
            font-size: 30px;
        }


        // 给父级一个类名来控制子集的样式
        &.focus{
            .search-icon{
                border: 1px solid #ccc;
                .svg-icon{
                    transform: rotate(-360deg);
                }
            }
            input{
                border: 1px solid #ccc;
                border-left: none;
                width: 350px;
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