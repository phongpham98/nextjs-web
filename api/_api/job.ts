import { HOST } from "@configs/api";
import { ApiListResponse, JobModel } from "@interfaces/model";
import request from "../request";

const Endpoint = HOST;

export const fetchJobs = (language?: string) => {
  return request<ApiListResponse<JobModel>>(
    "GET",
    Endpoint +
      "/jobs?limit=100&page=1&deactivated=false&language=" +
      (language ? language : "en")
  );
};
