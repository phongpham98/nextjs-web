import { HOST } from "@configs/api";
import { ApiListResponse, CommentModel } from "@interfaces/model";
import { CommentRequest, GetCommentRequest } from "@interfaces/request";
import qs from "qs";
import request from "../request";

const Endpoint = HOST;

export const postComment = (form: CommentRequest) => {
  return request<ApiListResponse<CommentModel>>(
    "POST",
    Endpoint + "/comments",
    { comment: form }
  );
};

export const getComments = (query: GetCommentRequest) => {
  const { limit, page, post_id } = query;
  const q = qs.stringify(
    { limit, page, post_id },
    {
      indices: false,
      skipNulls: true,
    }
  );
  return request<ApiListResponse<CommentModel>>(
    "GET",
    Endpoint + "/comments?" + q
  );
};

export const likeComment = (id: string) => {
  return request<any>("POST", Endpoint + "/comment-like/" + id);
};

export const likePost = (id: string) => {
  return request<any>("POST", Endpoint + "/post-like/" + id);
};
