import { createRouter, createWebHashHistory, RouterOptions, Router, RouteRecordRaw } from "vue-router";
//由于router的API默认使用了类型进行初始化，内部包含类型定义，所以本文内部代码中的所有数据类型是可以省略的
//RouterRecordRaw是路由组件对象
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "/",
    component: () => import("@/views/home/index.vue"),
    redirect: "/home",
    meta: {
      isKeepAlive: true,
    },
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/home/index.vue"),
        meta: {
          isLink: "",
          isHide: false,
          isKeepAlive: true,
          isAffix: true,
          isIframe: false,
          roles: ["admin", "common"],
          icon: "iconfont icon-shouye",
          title: "首页",
        },
      },
      {
        path: "/login",
        name: "login",
        component: () => import("@/views/login/index.vue"),
        meta: {
          isLink: "",
          isHide: false,
          isKeepAlive: true,
          isAffix: true,
          isIframe: false,
          roles: ["admin", "common"],
          icon: "iconfont icon-login",
          title: "登录",
        },
      },
    ],
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
