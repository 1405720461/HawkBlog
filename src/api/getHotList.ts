import { request } from "../utils/axios";

export function getHotList(url: string) {
  return request({ url, methods: "get" });
}
