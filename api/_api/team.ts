import { HOST } from "@configs/api";
import { ApiListResponse, MemberModel } from "@interfaces/model";
import { PostRequest } from "@interfaces/posts";
import i18next from "i18next";
import qs from "qs";
import request from "../request";

const Endpoint = HOST;

export const fetchMembers = (query: PostRequest) => {
  const { limit, page, deactivated } = query;
  const q = qs.stringify(
    { limit, page, deactivated, language: i18next.language },
    {
      indices: false,
      skipNulls: true,
      //   arrayFormat: "indices",
    }
  );
  return request<ApiListResponse<MemberModel>>("GET", Endpoint + "/team?" + q);
};
