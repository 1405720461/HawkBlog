import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "@/router";
import axios from "./utils/axios.ts";
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "element-plus/dist/index.css";
import { createPinia } from "pinia";
const pinia = createPinia();

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");

  if (!token && to.path !== "/login") {
    next("/login"); // 重定向到登录页
  } else {
    next(); // 允许导航继续
  }
});

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router).use(ElementPlus).use(pinia).mount("#app");
app.config.globalProperties.$axios = axios;
