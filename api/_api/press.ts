import { HOST } from "@configs/api";
import { ApiListResponse, PressMagazine } from "@interfaces/model";
import { PostRequest } from "@interfaces/posts";
import Router from "next/router";
import qs from "qs";
import request from "../request";

const Endpoint = HOST;

export const fetchPresses = (query: PostRequest) => {
  const { limit, page, deactivated, homepage } = query;
  const q = qs.stringify(
    { limit, page, language: Router.locale, deactivated, homepage },
    {
      indices: false,
      skipNulls: true,
    }
  );
  return request<ApiListResponse<PressMagazine>>(
    "GET",
    Endpoint + "/in-presses?" + q
  );
};
