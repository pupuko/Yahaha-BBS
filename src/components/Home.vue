<template>
    <div class="main-window">
        <div class="top-div">
            <div class="top-left logo-div">
                <router-link to="/">
                    <img src="/static/image/yahaha.png" />
                </router-link>
            </div>
            <div class="top-left menu-div">
                <ul>
                    <li>
                        <router-link to="/zone"> <div>分区</div></router-link>
                    </li>
                    <li>
                        <router-link to="/news"> <div>新闻</div></router-link>
                    </li>
                    <li>
                        <router-link to="/notice"> <div>公告</div></router-link>
                    </li>
                </ul>
            </div>
            <div class="top-right user-div">
                <input
                    type="text"
                    placeholder="搜索"
                    @keyup.enter="search"
                    v-model="keywords"
                />
                <ul>
                    <li>
                        <a>设置</a>
                    </li>
                    <li @click="menuClick('/sign')">
                        <a>登录</a>
                    </li>
                </ul>
                <!-- <i class="el-icon-search" id="search"/>
                <i class="el-icon-user" />
                <i class="el-icon-setting" /> -->
            </div>
        </div>
        <div class="black-div" />
        <div class="pictrue-div">
            <el-carousel indicator-position="outside">
                <el-carousel>
                    <el-carousel-item
                        v-for="(item, index) in carouselList"
                        :key="index"
                    >
                        <img
                            class="blur-img"
                            :src="`/static/image/${item}.jpg`"
                        />
                        <img :src="`/static/image/${item}.jpg`" />
                    </el-carousel-item>
                </el-carousel>
            </el-carousel>
        </div>
        <div class="guide-div">
            <div class="guide-logo">
                <h3>Yahaha</h3>
            </div>
            <div class="guide-bar">
                <a>这是一条公告</a>
            </div>
        </div>

        <router-view></router-view>

        <div class="home-div" v-if="$route.path == '/'">
            <div class="zone-div">
                <!-- <div class="guide-div" ></div> -->
                <div
                    class="zone-content"
                    v-for="(item, index) in zoneShowed"
                    :key="'zoneShowed' + index"
                >
                    <h2>{{ item.name }}</h2>
                    <div
                        class="zone-content-class"
                        v-for="(type, index) in item.child"
                        :key="index"
                    >
                        <img
                            class="zone-class-img"
                            :src="`/static/image/${type.name}.jpg`"
                        />
                        <ul>
                            <li
                                v-for="(game, index) in type.child"
                                :key="index"
                            >
                                <img :src="`/static/image/${game.name}.jpg`" />
                                <div class="zone-content-game">
                                    <h5 :title="game.name">
                                        {{ game.name }}
                                    </h5>
                                    <h6 :title="game.enName">
                                        {{ game.enName }}
                                    </h6>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>


                <div
                    class="zone-content"
                    v-for="(item, index) in ps4"
                    :key="'ps4' + index"
                >
                    <h2>{{ item.name }}</h2>
                    <div class="zone-content-ps4-1">
                        <div
                            class="ps4-big"
                            v-for="(game, index) in item.child"
                            :key="index"
                        >
                            <div>
                                <img :src="`/static/image/${game.name}.jpg`" />
                                <h5>{{ game.name }}</h5>
                            </div>
                        </div>
                    </div>

                    <div class="zone-content-ps4-2">
                        <div
                            class="ps4-list"
                            :class="index % 2 == 0 ? '' : 'ps4-list-dark'"
                            v-for="(game, index) in item.childList"
                            :key="index"
                        >
                            <img :src="`/static/image/${game.name}.jpg`" />
                            <div class="ps4-list-title">
                                <h5 :title="game.name">
                                    {{ game.name }}
                                </h5>
                                <h6 :title="game.enName">
                                    {{ game.enName }}
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="aside-div">
                <div class="aside-menu">
                    <h3
                        @click="newsMenuClick('news')"
                        :class="
                            isSelectedMenu == 'news'
                                ? 'aside-menu-selected'
                                : 'aside-menu-unSelected'
                        "
                    >
                        新闻
                    </h3>
                    <h3
                        @click="newsMenuClick('notice')"
                        :class="
                            isSelectedMenu == 'notice'
                                ? 'aside-menu-selected'
                                : 'aside-menu-unSelected'
                        "
                    >
                        公告
                    </h3>
                    <div class="line-div" />
                </div>
                <div class="aside-content-div" v-if="isSelectedMenu == 'news'">
                    <div
                        v-for="(item, index) in news"
                        :key="index"
                        class="aside-content"
                    >
                        <div class="content-title" :title="item.title">
                            {{ item.title }}
                        </div>
                        <div class="content-date">
                            {{ item.date }}
                        </div>
                    </div>
                </div>
                <div class="aside-content-div" v-else>
                    <div
                        v-for="(item, index) in notice"
                        :key="index"
                        class="aside-content"
                    >
                        <div class="content-title" :title="item.title">
                            {{ item.title }}
                        </div>
                        <div class="content-date">
                            {{ item.date }}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-div">
            <h4>Copyright &copy All rights reserved.</h4>
        </div>
    </div>
</template>

<script>
import { zoneShowed } from './ZoneShowed.js'
import { ps4 } from './PS4.js'
import { news } from './News.js'
import { notice } from './Notice.js'
import api from '../../api.js'
export default {
    mounted() {
        api.getNintendoGames().then(json => {
            console.log(json)
        })
        api.getPS4Games().then(json => {
            console.log(json)
        })
    },

    data() {
        return {
            zoneShowed,
            ps4,
            news,
            notice,
            keywords: '',
            carouselList: [1, 2, 3, 4],
            isSelectedMenu: 'news',
            routerPath: '/'
        }
    },

    methods: {
        search() {
            console.log(this.keywords)
            this.keywords = ''
        },
        menuClick(item) {
            if (item != this.$route.path) {
                this.$router.push(item)
            }
            console.log(this.$route.path)
            this.routerPath = this.$route.path
        },
        newsMenuClick(item) {
            this.isSelectedMenu = item
        }
    }
}
</script>

<style scoped>
.main-window {
    color: #333333;
    background-color: #eeeeee;
    user-select: none;
    min-height: 100vh;
}
.top-div {
    width: 100%;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.8);
    line-height: 50px;
    color: #aaaaaa;
    position: fixed;
    z-index: 100;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
}
.top-left {
    float: left;
    margin-left: 0px;
}
.logo-div {
    height: 100%;
    cursor: pointer;
    padding: 0 10px;
}
.logo-div img {
    height: 30px;
    width: 140px;
    padding: 10px 0px;
}
.menu-div {
    margin: 0;
}
.menu-div ul {
    list-style: none;
    margin: 0;
    padding-left: 0px;
}
.menu-div li {
    float: left;
    /* padding: 0 25px; */
    cursor: pointer;
    transition: 0.4s;
    font-weight: 600;
    width: 80px;
}
.menu-div li:hover {
    color: #ffeb38;
    /* background-color: rgb(40, 58, 73); */
    background-color: rgba(35, 35, 35, 0.8);
    /* backdrop-filter: saturate(180%) blur(20px); */
}
a {
    color: inherit;
    text-decoration: none;
    height: inherit;
}
.top-right {
    float: right;
    /* line-height: 50px; */
    margin-right: 20px;
    /* color: #aaaaaa; */
    cursor: pointer;
}
.user-div {
    font-size: 16px;
}
.user-div input {
    width: 120px;
    line-height: 24px;
    padding: 0px 15px;
    border: 0;
    border-radius: 12px;
    outline: none;
    /* background-color: rgb(40, 58, 73); */
    background-color: rgba(35, 35, 35, 0.8);
    color: #ffeb38;
    font-size: 14px;
    margin: 0 20px;
    font-weight: 400;
    /* float: right; */
}
.user-div ul {
    list-style: none;
    margin: 0;
    margin-right: 10px;
    float: right;
    padding: 0;
}
.user-div li {
    font-size: 14px;
    float: right;
    padding: 0 15px;
    cursor: pointer;
    transition: 0.4s;
}
.user-div li:hover {
    color: #ffeb38;
    /* background-color: rgb(40, 58, 73); */
}
.black-div {
    height: 50px;
    width: 100%;
    background-color: #222222;
}
.pictrue-div {
}
.pictrue-div img {
    position: absolute;
    width: 1200px;
    left: 50%;
    transform: translate(-50%, 0);

    /* margin: auto; */
}
.pictrue-div .blur-img {
    width: 110%;
    margin: -10px;
    filter: blur(7px);
}
.pictrue-div >>> .el-carousel__arrow--left {
    left: 110px;
}
.pictrue-div >>> .el-carousel__arrow--right {
    right: 110px;
}
.guide-div {
    height: 40px;
    width: 1250px;
    top: 330px;
    left: 50%;
    transform: translate(-50%, 0);
    position: absolute;
    z-index: 2;
    line-height: 40px;
}
.guide-logo {
    width: 100px;
    height: 100%;
    border-radius: 4px;
    background-color: #333333;
    float: left;
    box-shadow: 0px 8px 5px -5px #cccccc;
}
.guide-logo h3 {
    margin: 0;
    line-height: 40px;
    color: #ffeb38;
}
.guide-bar {
    margin-left: 10px;
    height: 100%;
    background-color: #ffffff;
    border-radius: 4px;
    float: left;
    box-shadow: 0px 8px 5px -5px #cccccc;
}
.guide-bar a {
    margin: 0;
    padding: 0 10px;
    cursor: pointer;
}
.home-div {
    margin: auto;
    margin-top: 30px;
    font-size: 0;
}
.zone-div {
    width: 900px;
    margin: auto;
    /* margin-top: 30px; */
    display: inline-block;
    font-size: 16px;
}
.zone-content {
    width: 100%;
    margin: auto;
    background-color: #ffffff;
    /* height: 400px; */
    margin-bottom: 20px;
    border-radius: 7px;
    box-shadow: 0px 5px 8px 0px #cccccc;
    text-align: left;
    padding: 0 15px;
    box-sizing: border-box;
    overflow: hidden;
}
.zone-div h2 {
    text-align: left;
    padding: 15px 0px;
    margin: 0 15px;
    /* border-bottom: 1px solid rgb(27, 43, 56, 0.7); */
}
.zone-content-class {
    width: 240px;
    padding: 10px;
    margin: 0px 15px 20px 15px;
    display: inline-block;
    box-shadow: 0px 3px 5px 0px #dddddd;
    border-radius: 4px;
}
.zone-class-img {
    width: 240px;
    height: 125px;
    cursor: pointer;
    opacity: 1;
}
.zone-class-img:hover {
    opacity: 0.7;
    transition: 0.3s;
}
.zone-content-class ul {
    list-style: none;
    text-align: left;
    margin: 0;
    margin-top: 4px;
    padding-left: 0;
}
.zone-content-class li {
    font-size: 16px;
    padding: 4px;
    height: 40px;
    box-sizing: content-box;
    cursor: pointer;
}
.zone-content-class li img {
    width: 40px;
    height: 40px;
    /* display: inline-block; */
    float: left;
}
.zone-content-game {
    /* display: inline-block; */
    float: left;
    height: 40px;
    width: 180px;
    box-sizing: content-box;
    padding-left: 10px;
}
.zone-content-game h5 {
    margin: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    padding: 2px 0;
    font-weight: 600;
}
.zone-content-game h6 {
    margin: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-weight: 500;
}
.ps4-big {
    width: 187.5px;
    padding: 0 15px 15px 15px;
    display: inline-block;
}
.ps4-big img {
    width: 100%;
    height: 140px;
    cursor: pointer;
}
.ps4-big img:hover {
    opacity: 0.7;
    transition: 0.3s;
}
.ps4-big h5 {
    font-weight: 600;
    margin: 0;
    text-align: center;
}
.zone-content-ps4-2 {
    padding: 5px;
    margin: 0 15px 20px 15px;
    box-shadow: 0px 3px 5px 0px #dddddd;
    border-radius: 4px;
}
.ps4-list {
    height: 40px;
    /* padding: 5px 0; */
    display: inline-block;
    width: 276px;
    cursor: pointer;
}
.ps4-list-dark {
    background-color: #eeeeee;
}
.ps4-list img {
    height: 40px;
    width: 40px;
    float: left;
}
.ps4-list-title {
    float: left;
    height: 40px;
    width: 225px;
    box-sizing: content-box;
    padding-left: 10px;
    text-align: left;
}
.ps4-list-title h5 {
    margin: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    padding: 2px 0;
    font-weight: 600;
    text-align: left;
}
.ps4-list-title h6 {
    margin: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-weight: 500;
}
.aside-div {
    width: 290px;
    display: inline-block;
    height: 1000px;
    background-color: #ffffff;
    border-radius: 7px;
    box-shadow: 0px 5px 8px 0px #cccccc;
    vertical-align: top;
    margin: 0px 0 0 10px;
    font-size: 16px;
}
.aside-menu {
    position: relative;
}
.aside-menu h3 {
    display: inline-block;
    margin: 5px 35px;
    padding: 10px 10px;
    position: relative;
    cursor: pointer;
}
.aside-menu-unSelected {
    font-weight: 400;
}
.aside-menu-selected {
    border-bottom: 3px solid #ffeb38;
    color: #000000;
}
.aside-content {
    height: 20px;
    padding: 10px 0px;
    margin: 0 15px;
    text-align: justify;
    font-size: 14px;
    border-bottom: 1px solid #cccccc;
    cursor: pointer;
}
.aside-content:hover {
    color: #aaaaaa;
    transition: 0.3s;
}
.content-title {
    width: 220px;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 20px;
    /* line-height: 20px; */
}
.content-date {
    display: inline-block;
    width: 40px;
    float: right;
    line-height: 20px;
    text-align: right;
}
.line-div {
    position: absolute;
    height: 16px;
    width: 1px;
    background-color: #d6d7d8;
    top: 21px;
    left: 50%;
}
.footer-div h4 {
    margin: 0px;
    padding: 40px 0 20px 0;
    font-weight: 400;
    font-size: 0.875em;
}
</style>
