<template>
  <el-form class="login-content-form">
    <el-form-item prop="userName">
      <el-input type="text" placeholder="请输入用户名" v-model="ruleForm.userName" clearable autocomplete="off"
        style="width:340px;">
        <template #prefix>
          <el-icon>
            <User />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="passWord">
      <el-input type="password" placeholder="请输入密码" v-model="ruleForm.passWord" clearable autocomplete="off"
        style="width:340px;">
        <template #prefix>
          <el-icon>
            <Lock />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="login-content-submit" round @click="login">登 录</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive, } from 'vue';
import eventBus from '../../../utils/eventBus.ts'
import { loginApi } from '@/api/login.ts';
import { useRouter } from 'vue-router';
import { setLocal } from '@/utils/localStorage'

const router = useRouter();

interface RuleForm {
  userName: string,
  passWord: string,
}

const ruleForm = reactive<RuleForm>({
  userName: "",
  passWord: "",
});

const login = async () => {
  // 发起登录请求并等待成功响
  if (ruleForm.userName && ruleForm.passWord) {
    const response: any = await loginApi(ruleForm.userName, ruleForm.passWord);
    //  登录成功后，关闭弹窗，导航到首页
    if (response.code == 0) {
      setLocal('token', response.data.access_token)
      eventBus.emit('closeMain', false);
      eventBus.emit('login-success',)
      ElMessage({
        message: '登录成功！',
        type: 'success',
        duration: 1000
      });
      router.push('/')
    } else {
      ElMessage({
        message: '账号或密码错误！',
        type: 'error',
        duration: 1000
      });
  }
}else {
    ElMessage({
      message: '请输入账号和密码！',
      type: 'error',
      duration: 1000
    });
  }
}
</script>

<style scoped lang="scss">
.login-content-form {
  margin-top: 20px;

  .login-content-code {
    display: flex;
    align-items: center;
    justify-content: space-around;

    .login-content-code-img {
      width: 100%;
      height: 40px;
      font-size: 16px;
      font-weight: 700;
      color: #333;
      text-align: center;
      text-indent: 5px;
      letter-spacing: 5px;
      cursor: pointer;
      background-color: #fff;
      border: 1px solid rgb(220 223 230);
      border-radius: 4px;
      transition: all ease 0.2s;

      &:hover {
        border-color: #c0c4cc;
        transition: all ease 0.2s;
      }
    }
  }

  .login-content-submit {
    width: 100%;
    margin-top: 15px;
    font-weight: 300;
    letter-spacing: 2px;
  }
}
</style>
