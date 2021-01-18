<template>
    <div class="main-window">
        <div class="img-div">
            <div class="sign-div">
                <div class="left-div">
                    <div class="logo-div">
                        <img src="/static/image/yahaha.png" @click="logoClick"/>
                    </div>
                    <div class="slogan-div">
                        <p>塞尔达，别再叫我呀哈哈了！</p>
                    </div>
                </div>
                <div class="right-div">
                    <div class="sign-menu">
                        <h3
                            @click="signMenuClick('login')"
                            :class="
                                isSelectedMenu == 'login'
                                    ? 'sign-menu-selected'
                                    : 'sign-menu-unSelected'
                            "
                        >
                            登录
                        </h3>
                        <h3
                            @click="signMenuClick('sign')"
                            :class="
                                isSelectedMenu == 'sign'
                                    ? 'sign-menu-selected'
                                    : 'sign-menu-unSelected'
                            "
                        >
                            注册
                        </h3>
                        <div class="line-div" />
                    </div>

                    <div class="sign" v-if="isSelectedMenu == 'sign'">
                        <el-form ref="signForm" :model="signForm">
                            <el-form-item>
                                <el-input
                                    v-model="signForm.name"
                                    placeholder="用户名"
                                ></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-input
                                    v-model="signForm.password"
                                    type="password"
                                    placeholder="密码"
                                ></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-input
                                    v-model="signForm.checkPassword"
                                    type="password"
                                    placeholder="确认密码"
                                ></el-input>
                            </el-form-item>
                            <el-form-item class="button-line">
                                <el-button>注 册</el-button>
                            </el-form-item>
                        </el-form>
                    </div>

                    <div class="login" v-if="isSelectedMenu == 'login'">
                        <el-form ref="loginForm" :model="loginForm">
                            <el-form-item>
                                <el-input
                                    v-model="loginForm.name"
                                    placeholder="用户名"
                                ></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-input
                                    v-model="loginForm.password"
                                    type="password"
                                    placeholder="密码"
                                ></el-input>
                            </el-form-item>
                            <el-form-item class="check-line">
                                <el-checkbox label="请记住我"></el-checkbox>
                            </el-form-item>
                            <el-form-item class="forget-line">
                                <el-button type="text">忘记密码?</el-button>
                            </el-form-item>
                            <el-form-item class="button-line">
                                <el-button>登 录</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            signForm: {
                name: '',
                password: '',
                checkPassword: ''
            },
            loginForm: {
                name: '',
                password: ''
            },
            isSelectedMenu: 'login'
        }
    },
    methods: {
        signMenuClick(item) {
            this.isSelectedMenu = item
        },
        logoClick() {
            this.$router.push('/')
        }
    }
}
</script>
<style scoped>
.main-window {
    overflow: hidden;
    color: #000000;
}
.img-div {
    width: 100%;
    height: 100%;
    position: fixed;
    background-image: url('/static/image/1.jpg');
    background-size: cover;
    background-repeat: no-repeat;
}
.sign-div {
    position: absolute;
    width: 800px;
    height: 400px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background: rgba(20, 20, 20, 0.7);
    backdrop-filter: saturate(180%) blur(10px);
    border-radius: 4px;
    box-shadow: 0 3px 5px 0px #00000099;
}
.left-div .right-div {
}
.left-div {
    width: 40%;
    height: 100%;
    float: left;
}
.right-div {
    width: 60%;
    height: 100%;
    background-color: #ffffff22;
    float: right;
    border-radius: 0 4px 4px 0;
    padding: 20px 50px;
    box-sizing: border-box;
}
.logo-div {
    width: 100%;
    height: 50%;
    text-align: center;
}
.logo-div img {
    height: 50px;
    padding-top: 100px;
    cursor: pointer;
}
.slogan-div p {
    font-size: 16px;
    text-align: center;
    color: #eeeeee;
    padding: 60px 20px;
}
.sign-menu {
    position: relative;
}
.sign-menu h3 {
    display: inline-block;
    margin: 0px 25px 25px 25px;
    padding: 10px 5px;
    position: relative;
    cursor: pointer;
}
.sign-menu-unSelected {
    font-weight: 400;
}
.sign-menu-selected {
    border-bottom: 3px solid #ffeb38;
    color: #ffeb38;
}
.line-div {
    position: absolute;
    height: 15px;
    width: 1px;
    background-color: #33333388;
    top: 17px;
    left: 50%;
}
.button-line {
    position: absolute;
    bottom: 10px;
    width: calc(60% - 100px);
}
.button-line >>> .el-button {
    height: 40px;
    width: 100%;
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
.sign >>> .el-input__inner {
    border: 0;
    background-color: #ffffff66;
    color: #333333;
}
.sign >>> .el-input__inner:focus {
    border: 0;
}
.login >>> .el-input__inner {
    border: 0;
    background-color: #ffffff66;
    color: #333333;
}
.login >>> .el-input__inner:focus {
    border: 0;
}
.login span {
    text-align: left;
}
.check-line {
    width: 100px;
    text-align: left;
    float: left;
    padding-left: 15px;
}
.check-line >>> .el-checkbox {
    color: #333333;
}
.check-line >>> .el-checkbox:hover {
    color: #ffeb38;
}
.check-line >>> .el-checkbox__input.is-checked + .el-checkbox__label {
    color: #ffeb38;
    transition: 0.3s
}
/* .check-line >>> .el-checkbox__inner {
    background-color: rgba(0, 0, 0, 0.8);
} */
.check-line >>> .el-checkbox__inner {
    border: 0;
}
.check-line >>> .el-checkbox__inner::after {
    border: 1px solid #ffeb38;
    border-left: 0;
    border-top: 0;
    left: 5px;
    top: 2px;
}
.check-line >>> .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background: rgba(0, 0, 0, 0.8);
    transition: 0.3s
}
.forget-line {
    width: 100px;
    text-align: right;
    float: right;
}
.forget-line >>> .el-button {
    background: transparent;
    border: 0;
    padding-right: 15px;
    /* padding: 0 0 0 15px; */
}
.forget-line >>> .el-button:hover {
    color: #ffeb38;
}
.forget-line >>> .el-button:active {
    color: #ffeb38aa;
}
.forget-line >>> .el-button {
    color: #333333;
}
.forget-line >>> .el-form-item__content {
    line-height: 0;
}
</style>
