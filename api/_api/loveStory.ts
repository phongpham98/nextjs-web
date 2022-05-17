import { HOST } from "@configs/api";
import { ApiListResponse, StoryModel } from "@interfaces/model";
import { PostModel, PostRequest } from "@interfaces/posts";
import qs from "qs";
import request from "../request";

const Endpoint = HOST;

export const fetchConnectedStories = (query: PostRequest) => {
  const { post_ids, homepage, limit, page, deactivated, language } = query;
  const q = qs.stringify(
    {
      post_ids,
	  language,
      homepage,
      limit,
      page,
      deactivated,
    },
    {
      indices: false,
      skipNulls: true,
    }
  );
  return request<ApiListResponse<PostModel>>("GET", Endpoint + "/stories?" + q);
};

export const fetchStoryById = (link?: string, id?: string, language?: string) => {
  const q = qs.stringify(
    { link, id, language },
    {
      indices: false,
      skipNulls: true,
    }
  );
  return request<StoryModel>("GET", Endpoint + "/story?" + q);
};
