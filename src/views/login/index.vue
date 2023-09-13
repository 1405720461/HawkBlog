<template>
  <div class="main" v-if="state.isLogining" >
    <!-- 点击登录 -->
    <div class="container">
      <div class="close" @click="close">
        <img src="../../assets/image/close.png" alt="" />
      </div>
      <div class="content">
        <el-tabs v-model="change.activeName" class="demo-tabs" @tab-click="handleClick">
          <el-tab-pane label="账号密码登录" name="login">
            <transition name="el-zoom-in-center">
              <Account v-show="!change.isTabPaneShow" />
            </transition>
          </el-tab-pane>
          <el-tab-pane label="邮箱注册登录" name="register">
            <transition name="el-zoom-in-center">
              <Email v-show="change.isTabPaneShow" />
            </transition>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
  <div v-else>
    <userCenter></userCenter>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import Account from "./component/account.vue"
import Email from "./component/email.vue"
import eventBus from '../../utils/eventBus.ts'
import userCenter from './component/userCenter.vue';
// const { proxy } = getCurrentInstance();
interface ComponentState {
  // showPassword: boolean;
  inputType: string;
  isLogining: boolean;
}

const state = reactive<ComponentState>({
  // showPassword: false,  //是否显示密码（小眼睛）
  inputType: "password", //输入密码是的输入框类型
  isLogining: true, //是否在登录页
})

interface ChangeObject {
  activeName: string;
  isTabPaneShow: boolean;
}
const change = reactive<ChangeObject>({
  activeName: "login",
  isTabPaneShow: false,
});

const handleClick = () => {
  change.isTabPaneShow = !change.isTabPaneShow;
};

onMounted(() => {
  // home页传递过来参数
  eventBus.on('isLogining', (msg: any) => {
    state.isLogining = msg;
  })
})

// 点击小眼睛密码是否显示的事件
// const toggleShowPassword = () => {
//   state.showPassword = !state.showPassword;
//   state.inputType = state.showPassword ? "text" : "password";
// }

// 接收窗口关闭的值为false
eventBus.on('closeMain', (msg: any) => {
  state.isLogining = msg
});

// 点击叉号，登录弹窗关闭事件
const close = () => {
  // if (state.isShowVerify === true) return;
  state.isLogining = false;
}
</script>

<style lang="scss" scoped>
.main {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  .container {
    position: relative;
    box-sizing: border-box;
    display: flex;
    width: 520px;
    padding: 52px 92px;
    user-select: none;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 6px rgb(0 0 0 / 10%);

    .close {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 18px;
      height: 18px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 400px;

      span {
        font-size: 18px;
        color: #505050;
      }
    }
  }
}
</style>