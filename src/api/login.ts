import { request } from "../utils/axios";

// 用户登录 /login  body参数
export function loginApi(name: string, pass: string) {
  return request({
    url: "/login", //此处为自己请求地址
    method: "post",
    data: {
      //如果后端是spring，用@RequestParams接收
      name: name, //如果传多个，直接继续加即可
      pass: pass,
    },
  });
}

//请求验证码/Captcha  body参数
export function captchaApi(email: string) {
  return request({
    url: "/Captcha",
    method: "post",
    data: {
      email: email,
    },
  });
}

// 注册 /Register   body参数 将九个参数组织成一个对象
export function registerApi(userData: object) {
  return request({
    url: "/Register",
    method: "post",
    data: {
      ...userData, // 将用户数据作为对象传递给data属性
    },
  });
}

// 获取用户信息
export function getUserInfoApi() {
  return request({
    url: "/GetUserInformation",
    method: "get",
  });
}

// 更新用户信息
export function updateUserInfoApi(userData: object) {
  return request({
    url: "/UpdateUserInformation",
    method: "put",
    data: {
      ...userData, // 将用户数据作为对象传递给data属性
    },
  });
}
