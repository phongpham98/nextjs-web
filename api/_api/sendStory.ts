import { HOST } from "@configs/api";
import { StoryResponse } from "@interfaces/model";
import { StoryRequest } from "@interfaces/request";
import { RcFile } from "antd/lib/upload";
import { forEach } from "lodash";
import request from "../request";

const Endpoint = HOST;

export const postStory = (form: StoryRequest) => {
  const clone = { ...form };
  delete clone.files;
  return request<StoryResponse>("POST", Endpoint + "/user-story", {
    story: clone,
  });
};

export const uploadStoryImages = (
  post_id: string,
  files?: RcFile[] | string[]
) => {
  const formData = new FormData();
  if (files) {
    forEach(files, (file) => {
      formData.append("files", file as any);
    });
  }

  return request<StoryResponse>(
    "POST",
    Endpoint + "/story-images?type=story&post_id=" + post_id,
    formData
  );
};
