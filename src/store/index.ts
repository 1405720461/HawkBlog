import { defineStore } from "pinia"; // 定义容器
export const mainStore = defineStore("useStore", {
  /**
   * 存储全局状态
   * 必须是箭头函数: 为了在服务器端渲染的时候避免交叉请求导致数据状态污染, TS 类型推导
   *
   */
  state: () => {
    return {};
  },
  /**
   * 用来封装计算属性 有缓存功能  =computed
   */
  getters: {},
  /**
   * 编辑业务逻辑  =methods
   */
  actions: {},
});

// 参考文档  https://juejin.cn/post/7098735394610479111
