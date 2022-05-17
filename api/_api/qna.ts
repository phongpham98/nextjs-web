import { HOST } from "@configs/api";
import { ApiListResponse, QAModel } from "@interfaces/model";
import { PostRequest } from "@interfaces/posts";
import { QuestionRequest } from "@interfaces/request";
import qs from "qs";
import request from "../request";

const Endpoint = HOST;

export const fetchQAs = (query: PostRequest) => {
  const { limit, page, deactivated, post_ids, tags, language } = query;
  const q = qs.stringify(
    { limit, page, deactivated, language, post_ids, tags },
    {
      indices: false,
      skipNulls: true,
    }
  );
  return request<ApiListResponse<QAModel>>("GET", Endpoint + "/answers?" + q);
};

export const fetchQaDetail = (id: string) => {
  return request<QAModel>("GET", Endpoint + "/answer/" + id);
};

export const sendQuestion = (form: QuestionRequest) => {
  const clone = { ...form };
  return request<any>("POST", Endpoint + "/question", {
    ques: clone,
  });
};
