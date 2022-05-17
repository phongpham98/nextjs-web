import { HOST } from "@configs/api";
import { CVRequest } from "@interfaces/request";
import { forEach } from "lodash";
import request from "../request";

const Endpoint = HOST;

export const sendCV = (form: CVRequest) => {
  const clone = { ...form };
  const formData = new FormData();
  forEach<CVRequest>(clone, (v, k) => {
    if (k === "file") formData.append("file", v as any);
    else {
      formData.append(k, `${v}`);
    }
  });
  return request<any>("POST", Endpoint + "/candidate?language", formData);
};
