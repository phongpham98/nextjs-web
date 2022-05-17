import { HOST } from "@configs/api";
import { ApiListResponse, EventModel } from "@interfaces/model";
import { PostRequest } from "@interfaces/posts";
import qs from "qs";
import request from "../request";

const Endpoint = HOST;

export const fetchAllEvents = (query: PostRequest) => {
  const { limit, page, tags, post_ids, deactivated, website, language } = query;
  const q = qs.stringify(
    { limit, page, language, tags, post_ids, deactivated, website },
    {
      indices: false,
      skipNulls: true,
    }
  );
  return request<ApiListResponse<EventModel>>("GET", Endpoint + "/events?" + q);
};

export const fetchEventById = (link: string, language?: string) => {
  return request<EventModel>("GET", Endpoint + "/event", {
    link: link,
    language,
  });
};
