<template>
    <div class="reply-div">
        <!-- <h3>
            回复:
        </h3> -->
        <div class="reply-content">
            <h3>发布</h3>
            <div>
                <div class="left-div">
                    <div class="left-img" />
                    <h4 class="left-name">
                        塞尔达
                    </h4>
                </div>
                <div class="right-div">
                    <el-input
                        type="textarea"
                        :rows="8"
                        placeholder="请输入内容"
                        v-model="text"
                        show-word-limit
                        resize="none"
                        maxlength="280"
                    >
                    </el-input>
                </div>
            </div>
            <div class="button-line">
                <el-button class="btn reply-btn" @click="btnClick()">
                    发布新闻
                </el-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            text: '',
            replyData: {
                name: '塞尔达',
                
            }
        }
    },

    methods: {
        btnClick() {
            console.log('add')
        }
    }
}
</script>
<style scoped>
.reply-div {
    width: 900px;
    /* height: 350px; */
    margin: auto;
    background: #ffffff;
    border-radius: 7px;
    box-shadow: 0px 5px 8px 0px #cccccc;
    margin-top: 10px;
    padding: 20px 20px;
    text-align: left;
    box-sizing: border-box;
    font-size: 0;
}

.reply-content h3 {
    color: #333333;
    font-size: 18px;
    margin: 0 0 20px 170px;
}
/* .reply-content {
    width: calc(100% - 20px);
    box-sizing: border-box;
    margin: 10px;
    padding: 10px;
    height: 300px;
    border: 1px solid #dddddd;
} */
.left-div {
    display: inline-block;
    width: 150px;
    margin-right: 20px;
}
.left-img {
    width: 120px;
    height: 120px;
    background: #dddddd;
    border-radius: 4px;
    margin: auto;
}
.left-name {
    text-align: center;
    font-size: 16px;
}
.right-div {
    /* position: absolute; */
    vertical-align: top;
    /* height: calc(100% - 20px); */
    /* height: 300px; */
    display: inline-block;
    width: calc(100% - 185px);
    box-sizing: border-box;
    text-align: justify;
    user-select: auto;
    font-size: 16px;
}
.right-div >>> .el-textarea {
    font-size: 16px;
}
.right-div >>> .el-textarea__inner {
    color: #333333;
    font-family: inherit;
    /* font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif; */
}
.right-div >>> .el-textarea__inner:focus {
    border-color: #C0C4CC;
}
.button-line {
    margin-left: 170px;
    margin-top: 20px;
}
.button-line >>> .el-button {
    height: 40px;
    width: 200px;
    background-color: rgba(0, 0, 0, 0.8);
    color: #ffeb38;
    border: 0;
}
.button-line >>> .el-button:hover {
    background: rgba(0, 0, 0, 0.7);
    border: 0;
}
.button-line >>> .el-button:active {
    border: 0;
    background: rgba(0, 0, 0, 0.75);
}
</style>
