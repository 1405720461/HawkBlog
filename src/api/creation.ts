import { request } from "../utils/axios";

export function addDraft(data: object) {
  return request({
    url: "/article/addDraft",
    method: "post",
    data,
  });
}

export function addArticle(data: object) {
  return request({
    url: "/article/addArticle",
    method: "post",
    data,
  });
}
