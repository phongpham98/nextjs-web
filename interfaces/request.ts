import { QuizPart } from "@redux/states";
import { AssignResult, QuizItemModel, UserResult } from "./model";

export type CategotyType = "Blog" | "News";

export interface CategoryHomeRequest {
  create_at?: string;
  updated_at?: string;
  deactivated?: boolean;
  name?: string;
  type?: CategotyType;
  language?: string;
  homepage?: boolean;
}

export interface CategoryRequest {
  cate_id: string;
  page?: number;
  limit?: number;
  language?: string;
}

export interface SearchRequest {
  q: string;
  limit?: number;
  page?: number;
  language?: string;
}

export interface QuizResponse {
  part: QuizPart;
  questions: QuizItemModel[];
  user_results: UserResult[];
  assign_result: AssignResult[];
}

export interface AnswerModel {
  question_id: string;
  answer: number;
  question_number: number;
  type_id: string;
}
