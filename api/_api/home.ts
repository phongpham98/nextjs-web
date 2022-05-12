import request from "@api/request";
import { HOST } from "@configs/api";
import { ApiListResponse } from "@interfaces/model";
import { CategoryResponse, PostModel, PostRequest } from "@interfaces/posts";
import { CategoryHomeRequest, CategoryRequest } from "@interfaces/request";
import { CategoryHome } from "@redux/states";
import Router from "next/router";
import qs from "qs";

const Endpoint = HOST;
export const getCategories = (query: CategoryHomeRequest) => {
  query.language = Router.locale;
  return request<CategoryHome[]>("GET", Endpoint + "/categories", query);
};

export const fetchLatestNews = (query: PostRequest) => {
  const { post_ids, limit, page, deactivated, highlight } = query;
  const q = qs.stringify(
    {
      post_ids,
      limit,
      page,
      deactivated,
      language: Router.locale,
      highlight,
    },
    {
      indices: false,
      skipNulls: true,
    }
  );
  return request<ApiListResponse<PostModel>>("GET", Endpoint + "/news?" + q);
};

export const fetchCeoBlog = (query: CategoryRequest) => {
	const { limit, page, cate_id } = query;
	const q = qs.stringify(
	  { limit, page, language: Router.locale, link: cate_id },
	  {
		indices: false,
		skipNulls: true,
	  }
	);
	return request<CategoryResponse>("GET", Endpoint + "/category/detail?" + q);
  };
  
