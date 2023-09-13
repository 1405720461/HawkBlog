<template>
  <el-form class="login-content-form" :rules="rules" ref="ruleFormRef" :model="ruleForm">
    <el-form-item prop="email">
      <el-input type="text" placeholder="请输入邮箱号" v-model="ruleForm.email" clearable style="width:350px;">
        <template #prefix>
          <el-icon>
            <Message />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="code">
      <el-row :gutter="20">
        <el-col :span="16">
          <el-input type="text" placeholder="请输入验证码" v-model="ruleForm.code" clearable style="width:240px;">
            <template #prefix>
              <el-icon>
                <Connection />
              </el-icon>
            </template>
          </el-input>
        </el-col>
        <el-col :span="8">
          <el-button @click="getCode">获取验证码</el-button>
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item prop="userName">
      <el-input type="text" placeholder="请输入用户名" v-model="ruleForm.userName" clearable style="width:350px;">
        <template #prefix>
          <el-icon>
            <User />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="passWord">
      <el-input type="password" placeholder="请输入密码" v-model="ruleForm.passWord" clearable style="width:350px;">
        <template #prefix>
          <el-icon>
            <Lock />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="login-content-submit" round @click="register(ruleFormRef)">
        注 册
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import type { FormInstance, FormRules } from 'element-plus'
import { captchaApi, registerApi } from '@/api/login';
import eventBus from '@/utils/eventBus.ts'
import { useRouter } from 'vue-router';

const router = useRouter();

interface RuleForm {
  email: string,
  code: string,
  userName: string,
  passWord: string,
  name: string,
  gender: string,
  age: number,
  interest: string,
  phoneNumber: number,
}

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  email: "",
  code: "",
  userName: "",
  passWord: "",
  // 下面是默认添加，需要后端删除
  name: "默认昵称",
  gender: "男",
  age: 18,
  interest: "唱歌",
  phoneNumber: 12345678910,
});

const rules = reactive<FormRules<RuleForm>>({
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { pattern: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/, message: '请输入有效的邮箱地址', trigger: 'blur' },
    { min: 5, message: '邮箱地址太短，至少需要5个字符', trigger: 'blur' },
    { max: 50, message: '邮箱地址太长，最多允许50个字符', trigger: 'blur' }
  ],
  code: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { min: 4, max: 6, message: '验证码长度应为4到6位', trigger: 'blur' },
    { pattern: /^\d+$/, message: '验证码应该只包含数字', trigger: 'blur' }
  ],
  userName: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  passWord: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ],
})

// 获取验证码
const getCode = async () => {
  if (ruleForm.email) {
    const result: any = await captchaApi(ruleForm.email)
    ruleForm.code = result
  } else {
    ElMessage({
      message: '请输入邮箱',
      type: 'error',
      duration: 1000
    })
  }
}

// 注册--登录
const register = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid) => {
    if (valid) {
      const response: any = await registerApi(ruleForm);
      if (response.code === 0) {
        eventBus.emit('closeMain', false);//关闭窗口
        // 注册成功，跳转到首页
        ElMessage({
          message: '注册成功！去登录!',
          type: 'success',
          duration: 1000
        });
        router.push('/')
      } else {
        // 处理注册失败的情况
        // 可以显示错误信息或采取其他操作
      }
    } else {
      ElMessage({
        message: '请正确输入',
        type: 'error',
        duration: 1000
      })
    }
  })
}

</script>

<style scoped lang="scss">
.login-content-form {
  margin-top: 20px;

  .login-content-submit {
    width: 100%;
    margin-top: 15px;
    font-weight: 300;
    letter-spacing: 2px;
  }
}
</style>
