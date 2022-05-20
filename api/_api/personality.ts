import { HOST } from "@configs/api";
import { AssignResult } from "@interfaces/model";
import Router from "next/router";
import request from "../request";

const Endpoint = HOST;

export const fetchPersonalityType = (code: string, language?: string) => {
  return request<AssignResult>(
    "GET",
    Endpoint + "/content/" + code + "?language=" + language
  );
};
