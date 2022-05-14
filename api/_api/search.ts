import { HOST } from "@configs/api";
import { SearchModel } from "@interfaces/model";
import { SearchRequest } from "@interfaces/request";
import Router from "next/router";
import qs from "qs";
import request from "../request";

const Endpoint = HOST;

export const search = (query: SearchRequest) => {
  const q = qs.stringify(
    { ...query, language: Router.locale },
    {
      indices: false,
      skipNulls: true,
    }
  );
  return request<SearchModel[]>("GET", Endpoint + "/search?" + q);
};
