import { HOST } from "@configs/api";
import request from "../request";

const Endpoint = HOST;

export const trachViews = (id: string) => {
  return request<any>("POST", Endpoint + "/post-view/"+ id);
};
