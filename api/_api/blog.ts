import { HOST } from "@configs/api";
import { ApiListResponse } from "@interfaces/model";
import { PostModel, PostRequest } from "@interfaces/posts";
import i18next from "i18next";
import qs from "qs";
// import {
//   AnotherPostRequest,
//   ApiListResponse,
//   PostRequest,
// } from "../../schema/api";
import request from "../request";

const Endpoint = HOST;

export const fetchBlogs = (query: PostRequest) => {
  const {
    post_ids,
    homepage,
    limit,
    page,
    deactivated,
    tags,
    highlight,
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
      language: i18next.language,
      highlight,
      ...quer,
    },
    {
      indices: false,
      skipNulls: true,
    }
  );
  return request<ApiListResponse<PostModel>>("GET", Endpoint + "/blogs?" + q);
};

export const getchBlogDetail = (link?: string, id?: string) => {
  const q = qs.stringify(
    { id, link, language: i18next.language },
    {
      indices: false,
      skipNulls: true,
    }
  );
  return request<PostModel>("GET", Endpoint + "/blog?" + q);
};

// export const fetchNextPost = (query: AnotherPostRequest) => {
//   const { id, public_date } = query;
//   const q = qs.stringify(
//     { id, public_date, language: i18next.language },
//     {
//       indices: false,
//       skipNulls: true,
//     }
//   );
//   return request<PostModel>("GET", Endpoint + `/next-blog?` + q);
// };

// export const fetchPrevPost = (query: AnotherPostRequest) => {
//   const { id, public_date } = query;
//   const q = qs.stringify(
//     { id, public_date, language: i18next.language },
//     {
//       indices: false,
//       skipNulls: true,
//     }
//   );
//   return request<PostModel>("GET", Endpoint + `/pre-blog?` + q);
// };
