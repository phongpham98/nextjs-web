import request from "@api/request";
import { HOST } from "@configs/api";
import { ApiListResponse } from "@interfaces/model";
import { PostModel, PostRequest } from "@interfaces/posts";
import { AnotherPostRequest } from "@interfaces/request";
import Router from "next/router";
import qs from "qs";

const Endpoint = HOST;
export const fetchListNews = (query: PostRequest) => {
  const { post_ids, homepage, limit, page, deactivated, tags, highlight, language } =
    query;
  const q = qs.stringify(
    {
      post_ids,
      homepage,
      tags,
      limit,
      page,
      deactivated,
      highlight,
	  language
    },
    {
      indices: false,
      skipNulls: true,
      //   arrayFormat: "indices",
    }
  );
  return request<ApiListResponse<PostModel>>("GET", Endpoint + "/news?" + q);
};

export const fetchNewsByLinkOrId = (link?: string, id?: string, language?: string) => {
  const q = qs.stringify(
    { link, id, language },
    {
      indices: false,
      skipNulls: true,
    }
  );
  return request<PostModel>("GET", Endpoint + "/news/detail?" + q);
};

export const fetchNextPost = (query: AnotherPostRequest) => {
  const { id, public_date } = query;
  const q = qs.stringify(
    { id, public_date },
    {
      indices: false,
      skipNulls: true,
    }
  );
  return request<PostModel>("GET", Endpoint + `/next-news?` + q);
};

export const fetchPrevPost = (query: AnotherPostRequest) => {
  const { id, public_date } = query;
  const q = qs.stringify(
    { id, public_date, language: Router.locale },
    {
      indices: false,
      skipNulls: true,
    }
  );
  return request<PostModel>("GET", Endpoint + `/pre-news?` + q);
};
