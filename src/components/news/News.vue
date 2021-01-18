<template>
    <div class="main-window">
        <div>
            <div v-if="$route.path == '/news'">
                <div class="news-div" id="top">
                    <div class="guide-div">
                        <div class="page-bar">
                            <el-pagination
                                :total="tableLen"
                                :current-page="currentPage"
                                :page-size="pageSize"
                                @current-change="pageChange"
                                layout="prev, pager, next, jumper"
                                background
                            ></el-pagination>
                        </div>
                        <div>
                            <div class="guide-btn cool-btn">
                                精华区
                            </div>
                            <div
                                class="guide-btn publish-btn"
                                @click="btnClick('bottom')"
                            >
                                发帖
                            </div>
                        </div>
                    </div>
                    <div class="table-div">
                        <el-table :data="tableData" stripe>
                            <el-table-column
                                label="标题"
                                prop="title"
                                width="600px"
                            >
                                <template slot-scope="scope">
                                    <router-link to="/read">
                                        <div class="title-a">
                                            {{ scope.row.title }}
                                        </div>
                                    </router-link>
                                </template>
                            </el-table-column>
                            <el-table-column
                                label="发帖时间"
                                prop="createTime"
                            ></el-table-column>
                            <el-table-column
                                label="最后回帖"
                                prop="lastTime"
                            ></el-table-column>
                        </el-table>
                    </div>
                    <div class="guide-div footer-guide-div">
                        <div class="page-bar">
                            <el-pagination
                                :total="tableLen"
                                :current-page="currentPage"
                                :page-size="pageSize"
                                @current-change="pageChange"
                                layout="prev, pager, next, jumper"
                                background
                            ></el-pagination>
                        </div>

                        <div
                            class="guide-btn go-top-btn"
                            @click="btnClick('top')"
                        >
                            <i class="el-icon-arrow-up" />
                        </div>
                        <div class="guide-btn cool-btn">
                            精华区
                        </div>
                    </div>
                </div>
                <v-reply />
            </div>
            <router-view />
        </div>
        <v-aside id="aside" />
    </div>
</template>
<script>
import { newsData } from './NewsData.js'
import Reply from '../reply/Reply.vue'
import Aside from './Aside'
export default {
    name: 'News',

    components: {
        'v-reply': Reply,
        'v-aside': Aside
    },

    data() {
        return {
            newsData,
            pageSize: 30,
            currentPage: 0,
            tableData: []
        }
    },
    mounted() {
        this.pageChange(1)
    },

    computed: {
        tableLen() {
            return this.newsData.length
        }
    },
    methods: {
        pageChange(value) {
            this.currentPage = value
            this.tableData = this.newsData.slice(
                (value - 1) * this.pageSize,
                value * this.pageSize
            )
            window.scrollTo(0, 0)
        },
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
        }
    }
}
</script>
<style scoped>
.main-window {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    margin: auto;
}
.news-div {
    width: 900px;
    /* height: 1000px; */
    margin: auto;
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
.page-bar >>> .el-input__inner:focus {
    border-color: #c0c4cc;
    outline: none;
}
.news-div >>> .el-pagination {
    /* padding-left: 10px; */
    float: left;
}
.news-div >>> .el-pagination.is-background .el-pager li:not(.disabled):hover {
    color: #333333;
}
.news-div >>> .el-pagination.is-background .el-pager li:not(.disabled).active {
    background: #333333;
    color: #ffeb38;
}
/* .news-div >>> .el-pagination.is-background .btn-next {
    background: #333333;
    color: #ffeb38;
}
.news-div >>> .el-pagination.is-background .btn-prev {
    background: #333333;
    color: #ffeb38;
}
.news-div >>> .el-pagination.is-background .btn-next:disabled {
    background: #333333;
    color: #ffeb3888;
}
.news-div >>> .el-pagination.is-background .btn-prev:disabled {
    background: #333333;
    color: #ffeb3888;
} */
.news-div >>> .el-pagination.is-background .el-pager li {
    color: #aaaaaa;
}
/* .guide-btn {
    height: 100%;
    line-height: 32px;
    text-align: center;
    cursor: pointer;
    float: right;
} */
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
/* .cool-btn {
    float: right;
}
.cool-btn:hover {
    font-weight: 600;
}
.publish-btn {
    float: right;
} */
.table-div {
    margin: 10px;
    width: calc(100% - 20px);
}
.table-div >>> .el-table .cell {
    white-space: pre-line;
}
.table-div a {
    font-size: inherit;
    text-decoration: inherit;
    color: inherit;
    width: auto;
}
.table-div a:hover {
    font-size: inherit;
    text-decoration: underline;
    color: #333333;
}
.title-a {
    display: inline;
    white-space: nowrap;
}
.go-top-btn {
    width: 30px;
    padding: 0;
}
.footer-guide-div {
    margin-top: 20px;
}
</style>
