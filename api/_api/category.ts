import { HOST } from "@configs/api";
import { CategoryHome, TagResponse } from "@interfaces/model";
import { CategoryResponse, PostRequest } from "@interfaces/posts";
import { CategoryRequest } from "@interfaces/request";
import qs from "qs";
import request from "../request";

const Endpoint = HOST;

export const fetchCategoryById = (query: CategoryRequest) => {
  const { limit, page, cate_id, language } = query;

  const q = qs.stringify(
    { link: cate_id, limit, page, language },
    {
      indices: false,
      skipNulls: true,
    }
  );
  return request<CategoryResponse>("GET", Endpoint + "/category/detail?" + q);
};

// export const fetchCategoryByLink = (link: string, language: string) => {
//   const q = qs.stringify(
//     { link, language },
//     {
//       indices: false,
//       skipNulls: true,
//     }
//   );
//   return request<CategoryHome>("GET", Endpoint + "/category?" + q);
// };

export const fetchTags = (language?: string) => {
  return request<TagResponse[]>("GET", Endpoint + "/tags?language=" + language);
};

export const fetchBlogs = (query: PostRequest) => {
  const {
    post_ids,
    homepage,
    limit,
    page,
    deactivated,
    category,
    tags,
    highlight,
    language,
    ...quer
  } = query;

  const q = qs.stringify(
    {
      post_ids,
      homepage,
      tags,
      limit,
      page,
      deactivated,
      category,
      language,
      highlight,
      ...quer,
    },
    {
      indices: false,
      skipNulls: true,
    }
  );
  return request<CategoryResponse>("GET", Endpoint + "/blogs?" + q);
};
