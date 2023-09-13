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

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router).use(ElementPlus).use(pinia).mount("#app");
app.config.globalProperties.$axios = axios;
