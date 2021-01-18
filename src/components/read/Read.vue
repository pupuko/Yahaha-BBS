<template>
    <div class="font-size-div" id="test">
        <div class="main-window">
            <div class="main-div">
                <div class="guide-div">
                    <div class="'page-bar">
                        <el-pagination
                            :total="50"
                            :current-page="1"
                            :page-size="20"
                            @current-change="pageChange"
                            layout="prev, pager, next, jumper"
                            background
                        ></el-pagination>
                    </div>
                    <div>
                        <div class="guide-btn only-btn">
                            只看楼主
                        </div>

                        <div
                            class="guide-btn reply-btn"
                            @click="btnClick('bottom')"
                        >
                            回复
                        </div>
                    </div>
                </div>

                <div class="read-div">
                    <h3 class="read-title">
                        {{ readData.title }}
                    </h3>
                    <div
                        class="read-content"
                        v-for="(item, index) in readData.content"
                        :key="index"
                    >
                        <div class="left-div">
                            <div class="left-img" />
                            <h4 class="left-name">
                                {{ item.name }}
                            </h4>
                        </div>
                        <div class="right-div">
                            <div class="content">
                                {{ item.content }}
                                <div class="reply-in-reply" v-if="item.reply">
                                    <ul>
                                        <li
                                            v-for="reply in item.reply"
                                            :key="reply"
                                        >
                                            <img
                                                class="re-in-re-img"
                                                src="/static/image/cube.jpg"
                                                width="27px"
                                                height="27px"
                                            />

                                            <span class="re-in-re-name"
                                                >{{
                                                    reply.name
                                                }}:&nbsp&nbsp&nbsp
                                            </span>
                                            <span class="re-in-re-content">{{
                                                reply.content
                                            }}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="reply-bar">
                                <i class="el-icon-star-off" title="赞同" />

                                <i
                                    class="el-icon-chat-dot-round"
                                    title="回复"
                                />
                                <i
                                    class="el-icon-warning-outline"
                                    title="举报"
                                />
                            </div>
                            <div class="layer-bar">
                                #{{ index + 1 }}&nbsp&nbsp&nbsp{{ item.time }}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="guide-div footer-guide-div">
                    <div class="'page-bar">
                        <el-pagination
                            :total="50"
                            :current-page="1"
                            :page-size="20"
                            @current-change="pageChange"
                            layout="prev, pager, next, jumper"
                            background
                        ></el-pagination>
                    </div>
                    <!-- <a href="javascript:window.scrollTo(0, 0)"> -->
                    <div class="guide-btn go-top-btn" @click="btnClick('top')">
                        <i class="el-icon-arrow-up" />
                    </div>
                    <div class="guide-btn only-btn">
                        只看楼主
                    </div>
                    <!-- </a> -->
                </div>
            </div>
            <v-reply />
        </div>
        <v-aside id="aside" :style="styleData" />
    </div>
</template>
<script>
import { readData } from './ReadData.js'
import Reply from '../reply/Reply.vue'
import Aside from './Aside'
export default {
    name: 'Read',

    components: {
        'v-reply': Reply,
        'v-aside': Aside
    },

    data() {
        return {
            readData,
            styleData: {
                position: 'inherit'
            },
            widthListener: 0
        }
    },

    mounted() {
        // window.addEventListener('scroll', this.scrollListener)
        // window.addEventListener('onresize', this.resizeListener)
        // this.widthListener = document.body.clientWidth
        // window.onresize = () => {
        //     return (() => {
        //         this.widthListener = document.body.clientWidth
        //         console.log(this.widthListener)
        //     })()
        // }
    },

    watch: {},

    methods: {
        btnClick(item) {
            if (item == 'top') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            } else if (item == 'bottom') {
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth'
                })
            }
        },
        // scrollListener() {
        //     let aside = document.getElementById('aside')
        //     if (document.documentElement.scrollTop >= 320) {
        //         this.styleData = {
        //             position: 'fixed',
        //             top: '30px',
        //             left: (this.widthListener - 1200) / 2 + 910 + 'px',
        //             height: 'calc(100% - 137px)',
        //         }
        //     } else {
        //         this.styleData = {
        //             position: 'inherit',
        //             height: '655px',
        //         }
        //     }
        // },
        // resizeListener() {
        //     let aside = document.getElementById('aside')
        //     this.styleData = {
        //         position: 'fixed',
        //         top: '30px',
        //         left: (this.widthListener - 1200) / 2 + 910 + 'px'
        //     }
        // },
        pageChange() {}
    }
}
</script>
<style scoped>
.font-size-div {
    /* font-size: 0; */
    margin: auto;
    width: 1200px;
    justify-content: space-between;
    display: flex;
    height: 100%;
}
.main-window {
    font-size: 16px;
    /* display: inline-block; */
}
.main-div {
    width: 900px;
    /* height: 1000px; */
    background: #ffffff;
    border-radius: 7px;
    box-shadow: 0px 5px 8px 0px #cccccc;
    margin-top: 30px;
    padding: 20px 10px;
    text-align: left;
    box-sizing: border-box;
}
.guide-div {
    width: 100%;
    height: 32px;
}
.footer-guide-div {
    margin-top: 20px;
}
.guide-btn {
    float: right;
    padding: 0 10px;
    color: #aaaaaa;
    line-height: 30px;
    margin-right: 10px;
    height: 30px;
    text-align: center;
    box-shadow: 0 2px 5px 0 #dddddd;
    border-radius: 4px;
    cursor: pointer;
}
.guide-btn:hover {
    color: #666666;
    box-shadow: 0 2px 5px 0 #bbbbbb;
}
.go-top-btn {
    width: 30px;
    padding: 0;
}
.page-bar >>> .el-input__inner:focus {
    border-color: #c0c4cc;
    outline: none;
}
.main-div >>> .el-pagination {
    /* padding-left: 10px; */
    float: left;
}
.main-div >>> .el-pagination.is-background .el-pager li:not(.disabled):hover {
    color: #333333;
}
.main-div >>> .el-pagination.is-background .el-pager li:not(.disabled).active {
    background: #333333;
    color: #ffeb38;
}
.main-div >>> .el-pagination.is-background .el-pager li {
    color: #aaaaaa;
}

.read-div {
    margin: 10px;
}
.read-title {
    border-bottom: 1px solid #eeeeee;
    margin: 0;
    padding: 10px 0 20px 0;
}
.read-content {
    border-bottom: 1px solid #eeeeee;
    /* min-height: 250px; */
    position: relative;
    padding-top: 20px;
    font-size: 0;
}
.left-div {
    display: inline-block;
    width: 150px;
    font-size: 16px;
    margin-right: 20px;
    /* border-right: 1px solid #888888; */
}
.left-img {
    width: 120px;
    height: 120px;
    margin: auto;
    background: #dddddd;
    border-radius: 4px;
    /* margin-top: 20px; */
}
.left-name {
    text-align: center;
}
.right-div {
    /* position: absolute; */
    vertical-align: top;
    height: calc(100% - 20px);
    display: inline-block;
    width: calc(100% - 170px);
    box-sizing: border-box;
    text-align: justify;
    user-select: auto;
    font-size: 16px;
    /* font-family: Arial, Helvetica, sans-serif; */
}
.content {
    padding: 0 15px 40px 0;
}
.reply-bar {
    font-size: 1em;
    position: absolute;
    bottom: 6px;
    color: #dddddd;
}
.reply-bar i {
    margin-right: 5px;
    cursor: pointer;
}
.reply-bar i:hover {
    color: #666666;
    transition: 0.4s;
}
.layer-bar {
    font-size: 0.75em;
    position: absolute;
    /* vertical-align: bottom; */
    bottom: 10px;
    color: #666666;
    right: 15px;
}
.reply-in-reply {
    width: 100%;
    background: #f5f5f5;
    color: #666666;
    font-size: 0.875em;
    /* margin: 10px; */
    margin-top: 80px;
    box-sizing: border-box;
    border-radius: 4px;
}
.reply-in-reply ul {
    list-style: none;
    padding: 0 10px;
    margin: 0;
}
.reply-in-reply li {
    line-height: 35px;
    height: 35px;
    display: flex;
    align-items: center;
}
.re-in-re-name {
    font-weight: 600;
}
.re-in-re-img {
    margin-right: 10px;
}
.re-in-re-content {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
