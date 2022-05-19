import request from "@api/request";
import { HOST } from "@configs/api";
import { ApiListResponse, CategoryHome } from "@interfaces/model";
import { CategoryResponse, PostModel, PostRequest } from "@interfaces/posts";
import { CategoryHomeRequest, CategoryRequest } from "@interfaces/request";
import qs from "qs";

const Endpoint = HOST;
export const getCategories = (query: CategoryHomeRequest) => {
  return request<CategoryHome[]>("GET", Endpoint + "/categories", query);
};

export const fetchLatestNews = (query: PostRequest) => {
  const { post_ids, limit, page, deactivated, highlight, language, ...props } = query;
  const q = qs.stringify(
    {
      post_ids,
      limit,
      page,
      deactivated,
      highlight,
	  language,
	  ...props
    },
    {
      indices: false,
      skipNulls: true,
    }
  );
  return request<ApiListResponse<PostModel>>("GET", Endpoint + "/news?" + q);
};

export const fetchCeoBlog = (query: CategoryRequest) => {
	const { limit, page, cate_id, language } = query;
	const q = qs.stringify(
	  { limit, page, language, link: cate_id },
	  {
		indices: false,
		skipNulls: true,
	  }
	);
	return request<CategoryResponse>("GET", Endpoint + "/category/detail?" + q);
  };
  
