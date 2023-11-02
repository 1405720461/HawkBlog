<template>
    <div class="container">
      <el-tabs tab-position="left" style="height: 200px" class="demo-tabs">
      <el-tab-pane label="我的信息" class="info">我的信息
        <div class="avatar">
          <el-avatar> user </el-avatar>
        </div>
        <!-- <el-form
          :label-position="labelPosition"
          label-width="100px"
          :model="formLabelAlign"
          style="max-width: 460px"
        >
          <el-form-item label="Name">
            <el-input v-model="formLabelAlign.name" />
          </el-form-item>
          <el-form-item label="Activity zone">
            <el-input v-model="formLabelAlign.region" />
          </el-form-item>
          <el-form-item label="Activity form">
            <el-input v-model="formLabelAlign.type" />
          </el-form-item>
        </el-form> -->
      </el-tab-pane>
      <el-tab-pane label="我的投稿">我的投稿</el-tab-pane>
      <el-tab-pane label="退出登录" @click="loginOut">退出登录</el-tab-pane>
    </el-tabs>
    </div>
    
  </template>
  
  <script lang="ts" setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  // 退出登录
  const loginOut = () => {
    localStorage.removeItem('token');
    router.push("/login");
  }

  </script>
  
  <style>
  .container{
    width: 90%;
    margin: 50px auto;
    /* display: flex;
    justify-content: space-between;
    align-items: center; */
  }
  .demo-tabs > .el-tabs__content {
    padding: 32px;
    /* color: #6b778c; */
    font-size: 32px;
    font-weight: 600;
  }
  
  /* .el-tabs--right .el-tabs__content,
  .el-tabs--left .el-tabs__content {
    height: 100%;
  } */
  </style>
  