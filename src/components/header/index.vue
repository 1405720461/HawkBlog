<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import eventBus from '@/utils/eventBus.ts'
import { Search } from '@element-plus/icons-vue'
import { useRouter } from "vue-router";
import { getLocal } from '@/utils/localStorage';
const router = useRouter();
const input1 = ref("");
const isLogining = ref(false)
//页面初始加载判断token是否存在
const token = getLocal('token')
isLogining.value = token ? true : false
//当登录后导航栏变化
onMounted(() => {
    eventBus.on('login-success', (msg: any) => {
        isLogining.value = msg
    })
    isLogining.value = isLogining.value ? true : false
})

const handleSelect = (key: string) => {
    router.push(`${key}`)
}
</script>
<template>
    <header class="header-container">
        <el-menu class="header-menu" :default-active="$route.path" mode="horizontal" @select="handleSelect">
            <el-menu-item index="/home">首页</el-menu-item>
            <el-menu-item index="/blog">博客</el-menu-item>
            <el-sub-menu index="/study">
                <template #title>学习</template>
                <el-menu-item index="/study/go">GO语言</el-menu-item>
                <el-menu-item index="/study/java">JAVA语言</el-menu-item>
                <el-menu-item index="/study/python">PYTHON语言</el-menu-item>
                <el-menu-item index="/study/c">C语言</el-menu-item>
                <el-sub-menu index="/study/web">
                    <template #title>前端开发</template>
                    <el-menu-item index="/study/web/uniapp">UNI-APP</el-menu-item>
                    <el-menu-item index="/study/web//react">REACT</el-menu-item>
                    <el-menu-item index="/study/web/vue">VUE</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="/community">社区</el-menu-item>

            <el-input v-model="input1" placeholder="Please input" class="header-search">
                <template #append>
                    <el-button :icon="Search" />
                </template>
            </el-input>
            <el-menu-item :index="isLogining ? '/center' : '/login'">
                <div class="avatar">
                    {{ isLogining ? '用户中心' : '登录' }}
                </div>
            </el-menu-item>
            <el-menu-item index="/chat">聊天室</el-menu-item>
            <el-menu-item index="/history">历史</el-menu-item>
            <el-menu-item index="/contribute"><el-button type="primary" class="contribute">
                    投稿
                </el-button></el-menu-item>
        </el-menu>

    </header>
</template>
<style lang="scss" scoped>
.header-container {
    width: 100vw;
    display: flex;
    position: sticky;
    left: 0;
    top: 0;
    z-index: 1000;
    flex-direction: row;
    justify-content: space-between;
}

.header-menu {
    width: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: space-around;

}

.header-search {
    width: 30%;
    height: 70%;
    margin: 10px;
}

.contribute {
    height: 70%;
    margin: 10px;
}

.avatar {
    width: 55px;
    height: 55px;
    margin: 3px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: rgba(170, 170, 255, 0.277);
    cursor: pointer;
}
</style>