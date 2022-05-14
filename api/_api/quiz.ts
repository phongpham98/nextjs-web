import { HOST } from "@configs/api";
import { AnswerModel, QuizResponse } from "@interfaces/request";
import i18next from "i18next";
import request from "../request";

const Endpoint = HOST;

export const fetchQuestion = () => {
  let session_id = sessionStorage.getItem("session_id");
  if (session_id) {
    return request<QuizResponse>(
      "GET",
      Endpoint + "/results/" + session_id + "?language=" + i18next.language
    );
  }
  return null;
};

export const getResult = (session_id: string) => {
  return request<QuizResponse>(
    "GET",
    Endpoint + "/results/" + session_id + "?language=" + i18next.language
  );
};

export const postAnswer = (answer: AnswerModel) => {
  let session_id = sessionStorage.getItem("session_id");
  if (session_id) {
    return request<QuizResponse>(
      "POST",
      Endpoint + "/personality/" + session_id + "?language=" + i18next.language,
      answer
    );
  }
  return null;
};
