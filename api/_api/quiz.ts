import { HOST } from "@configs/api";
import { AnswerModel, QuizResponse } from "@interfaces/request";
import Router from "next/router";
import request from "../request";

const Endpoint = HOST;

export const fetchQuestion = () => {
  let session_id = sessionStorage.getItem("session_id");
  if (session_id) {
    return request<QuizResponse>(
      "GET",
      Endpoint + "/results/" + session_id + "?language=" + Router.locale
    );
  }
  return null;
};

export const getResult = (session_id: string) => {
  return request<QuizResponse>(
    "GET",
    Endpoint + "/results/" + session_id + "?language=" + Router.locale
  );
};

export const postAnswer = (answer: AnswerModel) => {
  let session_id = sessionStorage.getItem("session_id");
  if (session_id) {
    return request<QuizResponse>(
      "POST",
      Endpoint + "/personality/" + session_id + "?language=" + Router.locale,
      answer
    );
  }
  return null;
};
