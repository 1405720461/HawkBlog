import { createRouter, createWebHashHistory, RouterOptions, Router, RouteRecordRaw } from "vue-router";
//由于router的API默认使用了类型进行初始化，内部包含类型定义，所以本文内部代码中的所有数据类型是可以省略的
//RouterRecordRaw是路由组件对象
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "/",
    component: () => import("@/views/home/index.vue"),
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/home/index.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/center",
    name: "center",
    component: () => import("@/views/center/index.vue"),
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("@/views/blog/index.vue"),
  },
  {
    path: "/chat",
    name: "chat",
    component: () => import("@/views/chat/index.vue"),
  },
  {
    path: "/study",
    name: "study",
    component: () => import("@/views/blog/index.vue"),
  },
  {
    path: "/community",
    name: "community",
    component: () => import("@/views/community/index.vue"),
  },
  {
    path: "/history",
    name: "history",
    component: () => import("@/views/history/index.vue"),
  },
  {
    path: "/creation",
    name: "creation",
    component: () => import("../views/creation/index.vue"),
  },
];

// RouterOptions是路由选项类型
const options: RouterOptions = {
  history: createWebHashHistory(),
  routes,
};

// Router是路由对象类型
const router: Router = createRouter(options);

export default router;
