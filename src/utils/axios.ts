import axios from "axios";
import { ElMessage } from "element-plus";
// import { getToken } from '@/utils/auth'

export const request = (options: any) => {
  return new Promise((resolve, reject) => {
    // create an axios instance
    const service = axios.create({
      // baseURL: process.env.BASE_API, // api 的 base_url
      baseURL: "/api",
      timeout: 8000, // request timeout
    });

    // request interceptor
    service.interceptors.request.use(
      (config: any) => {
        const token: string =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIxMjM0NTY3OCIsImV4cCI6MTY5NDY4NjYwNiwidXNlcklkIjo0MzkzNTM4NTM1NzQ2NDc4MDgsInVzZXJOYW1lIjoiMTIzIiwibmFtZSI6IndqbCIsInJvbGUiOiJ1c2VyIn0.oM9UEbP6RaR6lqQNT3KMYK2XhGxXsILscpI3E4zy6jI";
        if (token) {
          // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
          config.headers["X-Token"] = token;

          config.headers.Authorization = token;
        }
        return config;
      },
      (error) => {
        // Do something with request error
        console.log("出错啦", error); // for debug
        Promise.reject(error);
      }
    );

    // response interceptor
    service.interceptors.response.use(
      (response: any) => {
        return response.data;
      },
      (error) => {
        console.log("err" + error); // for debug
        if (error.response.status == 403) {
          ElMessage.error("错了");
        } else {
          ElMessage.error("服务器请求错误，请稍后再试");
        }
        return Promise.reject(error);
      }
    );
    // 请求处理
    service(options)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default request;
