<template>
    <form ref="container" class="data-form-container" id="data-form-container" @submit.prevent="postComment">
        <div class="touxiang">
            <img class="tx" :src="gg" alt="">
            <div class="avata-list">
                头像选择
            </div>
        </div>
        <div class="comment-info">
            <textarea v-model.trim="formDate.content" class="comment-txt" :placeholder="!reply?'你是我一生唱不完的歌~':`@回复 ${reply.nickname}`"></textarea>
            <button class="submit" :disabled="disabled">{{ disabled? "发射中...": 'biu' }}~</button>
            <input type="text" class="nickname" placeholder="取一个酷酷的代号吧~" v-model="formDate.nickname">
        </div>
    </form>
</template>

<script>
    import gg from "@/assets/gg.jpeg";
    export default {
        props: ["reply"],
        data(){
            return {
                formDate: {
                    content: "",
                    nickname: "",
                },
                disabled: false,
                // flag: false,
                gg
            }
        },
        watch: {
            reply: {
                handler(newValue){
                    this.reply = newValue;
                }
            }
        },
        methods: {
            // 新增评论
            postComment(){
                console.log(this.reply);
                if(!this.formDate.nickname || !this.formDate.content){
                    alert("用户名或内容不能为空");
                    return ;
                }

                this.$showMessage({
                    content: "评论提交中",
                    type: "info",
                    container: this.$refs.container
                });

                // 控制提交按钮是否可选中
                this.disabled = true;
                this.$emit("submit", this.formDate, (msg) => {
                    const self = this;
                    this.$showMessage({
                        content: msg,
                        type: "success",
                        container: this.$refs.container,
                        callback(){
                            self.formDate.content = "";
                            self.formDate.nickname = "";
                            self.disabled = false;
                        }
                    });
                });
            },
            // 显示头像框
            // selectImg(){
            //     this.flag = true;
            // },
            // // 隐藏头像框
            // hiddenImg(e){
            //     // 当 头像选择框显示的时候才去隐藏
            //     if (!this.flag){
            //         return ;
            //     }
            //     if(e.target.className === "tx"){
            //         return ;
            //     }
            //     this.flag = false;
            // }
        },
        mounted() {
            addEventListener("click", this.hiddenImg);
        },
        destroyed() {
            removeEventListener("click", this.hiddenImg)
        }
    }
</script>

<style lang="less" scoped>
    .data-form-container{
        margin: 50px 0;
        display: flex;
        align-items: center;

        .touxiang{
            position: relative;
            img{
                width: 40px;
                height: 40px;
                border-radius: 50%;
                object-fit: cover;
                cursor: pointer;
            }

            &.avatabox{
                .avata-list{
                    transform: scaleY(1);
                }
            }

            .avata-list{
                position: absolute;
                width: 200px;
                height: 100px;
                background: #Fff;
                z-index: 1;
                top: -120px;
                left: -70px;
                box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
                transform-origin: bottom;
                transform: scaleY(0);
                transition: all 0.2s;

                &:before{
                    content: "";
                    display: block;
                    width: 15px;
                    height: 15px;
                    position: absolute;
                    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
                    background: #fff;
                    bottom: -7px;
                    left: 80px;
                    transform: rotate(45deg);
                }
            }

        }

        .comment-info{
            display: flex;
            width: 100%;
            margin-left: 30px;
            position: relative;
            .comment-txt{
                resize: none;
                font-size: 12px;
                box-sizing: border-box;
                background-color: #f4f5f7;
                border: 1px solid #e5e9ef;
                overflow: auto;
                border-radius: 4px;
                color: #555;
                width: 100%;
                height: 65px;
                padding: 5px 10px;
                line-height: normal;
                outline: none;
                flex: 1;
            }

            .submit{
                width: 75px;
                outline: none;
                margin-left: 15px;
                border: none;
                border-radius: 4px;
                background: #00a1d6;
                color: #Fff;
                font-size: 14px;
                cursor: pointer;

                &:disabled{
                    background: #7d7d7d;
                    cursor: not-allowed;
                }
            }
            .nickname{
                position: absolute;
                left: 0;
                top: -35px;
                background-color: #f4f5f7;
                border: 1px solid #e5e9ef;
                color: #555;
                outline: none;
                box-sizing: border-box;
                line-height: 24px;
                font-size: 13px;
                width: 250px;
                border-radius: 4px;
                padding-left: 8px;
            }

            .comment-txt:focus,
            .nickname:focus{
                border: 1px solid #00a1d6;
                background: #fff;
            }
        }
    }
</style>