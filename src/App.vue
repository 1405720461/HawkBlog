<template>
  <indexHeader v-if="showHeader"></indexHeader>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import indexHeader from "@/components/header/index.vue";

const route = useRoute();
const showHeader = computed(() => {
  // 如果路由路径不是 '/login' 和 '/creation'，则显示头部
  return route.path !== "/login" && route.path !== "/creation";
});
</script>
<style lang="scss">
* {
  box-sizing: border-box;
}
</style>
