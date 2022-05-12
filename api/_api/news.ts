import request from "@api/request";
import { HOST } from "@configs/api";
import { ApiListResponse } from "@interfaces/model";
import { PostModel, PostRequest } from "@interfaces/posts";
import i18next from "i18next";
import qs from "qs";

const Endpoint = HOST;
export const fetchListNews = (query: PostRequest) => {
  const { post_ids, homepage, limit, page, deactivated, tags, highlight } =
    query;
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
    },
    {
      indices: false,
      skipNulls: true,
      //   arrayFormat: "indices",
    }
  );
  return request<ApiListResponse<PostModel>>("GET", Endpoint + "/news?" + q);
};

export const fetchNewsDetail = (link?: string, id?: string) => {
  const q = qs.stringify(
    { link, id, language: i18next.language },
    {
      indices: false,
      skipNulls: true,
    }
  );
  return request<PostModel>("GET", Endpoint + "/news/detail?" + q);
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
//   return request<PostModel>("GET", Endpoint + `/next-news?` + q);
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
//   return request<PostModel>("GET", Endpoint + `/pre-news?` + q);
// };
