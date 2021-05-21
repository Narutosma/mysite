<template>
    <form ref="container" class="data-form-container" id="data-form-container" @submit.prevent="postComment">
        <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcq.qnzs.youth.cn%2Fassets%2Fuploads%2F3c59799925d6840022ddc3f01e3a6c8a.jpg&refer=http%3A%2F%2Fcq.qnzs.youth.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619674478&t=14502e20930b5f983e9bf893615c5122" alt="">
        <div class="comment-info">
            <textarea v-model.trim="content" class="comment-txt" placeholder="你是我一生唱不完的歌"></textarea>
            <button class="submit" :disabled="disabled">{{ disabled? "发射中...": 'biu' }}~</button>
            <input type="text" class="nickname" placeholder="取一个酷酷的代号吧~" v-model="nickname">
        </div>
    </form>
</template>

<script>
export default {
    data(){
        return {
            content: "",
            nickname: "",
            disabled: false
        }
    },
    methods: {
        // 新增评论
        postComment(){
            if(!this.nickname || !this.content){
                alert("用户名或内容不能为空");
                return ;
            }
            // 控制提交按钮是否可选中
            this.disabled = true;
            this.$emit("submit", this.nickname, this.content, () => {
                this.content = "";
                this.nickname = "";
                this.disabled = false;
            });
        }
    }
}
</script>

<style lang="less" scoped> 
    .data-form-container{
        margin: 50px 0;
        display: flex;
        align-items: center;

        img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            object-fit: cover;
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