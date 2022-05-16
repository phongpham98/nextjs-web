import { Author, CategoryItem, LanguageType, Tag } from "./posts";

export interface ApiListResponse<T> {
  total: number;
  items: T[];
}

export interface InstaPost {
  link: string;
  image: string;
}

export interface PressMagazine {
  author: string;
  banner: string;
  banner_key: string;
  deactivated: boolean;
  homepage: boolean;
  id: string;
  link: string;
  language: LanguageType;
  short_description: string;
  thumbnail: string;
  thumbnail_key: string;
  title: string;
  date: number;
}

export interface SearchModel {
  author?: Author;
  banner: string;
  category: CategoryItem;
  contents: string;
  created_at: number;
  updated_at?: number;
  id: string;
  title: string;
  thumbnail?: string;
  deactivated?: boolean;
  search_type: string;
  link: string;
  tags?: Tag[];
}

export interface PersonalityTypeItemModel {
  image_src: string;
  characters: string[];
  name: string;
}
export interface QuizQuestion {
  question_id: string;
  question: string;
  question_number: number;
  answered?: number;
  image_url: string;
}
export interface QuizItemModel {
  type: string;
  type_id: string;
  part_number: number;
  items: QuizQuestion[];
}

export type Trait = "Mind" | "Energy" | "Nature" | "Tactics";

export interface QuizQuestion {
  question_id: string;
  question: string;
  question_number: number;
  answered?: number;
  image_url: string;
}

export interface QuizItemModel {
  type: string;
  type_id: string;
  part_number: number;
  items: QuizQuestion[];
}

export interface QuizResultItem {
  key: string;
  key_name: string;
  type: string;
  value: number;
}

export interface UserResult {
  type: Trait;
  type_name: string;
  type_key: string;
  results: QuizResultItem[];
}

interface InsightItem {
  title: {
    en: string;
    vi: string;
  };
  description: {
    en: string;
    vi: string;
  };
}

export interface InsightsModel {
  strength: InsightItem;
  weakness: InsightItem;
  career: InsightItem;
  relationship: InsightItem;
  friendship: InsightItem;
}

export interface CareerTagsModel {
  id: number;
  name: string;
}
export interface AssignResult {
  code: string;
  title: string;
  description: string;
  tags: string[];
  career: string;
  strength_weakness: string;
  relationship: string;
  other: string;
  suitable_career_list: CareerTagsModel[];
  suitable_relationship_list: string[];
  insights: InsightsModel;
  friendship: string;
  suitable_friendship_list: string[];
  quote: string;
  image_url?: string;
}

export interface TraitCardModel {
  suitable_list: CareerTagsModel[] | string[];
  text: string;
}

export interface CommentModel {
  comments: string;
  created_at: number;
  deactivated: boolean;
  email: string;
  id: string;
  liked: number;
  name: string;
  replies?: CommentModel[];
}
