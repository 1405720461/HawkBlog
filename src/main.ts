import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "@/router";
import axios from "./utils/axios.ts";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { createPinia } from "pinia";

const pinia = createPinia();

const app = createApp(App);
app.use(router).use(ElementPlus).use(pinia).mount("#app");
app.config.globalProperties.$axios = axios;
