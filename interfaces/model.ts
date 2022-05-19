import { Author, CategoryItem, LanguageType, PostModel, Tag } from "./posts";

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

export interface StoryModel extends PostModel {
  slogan?: string;
}

export interface StoryResponse {
  user_a: string;
  user_b: string;
  email: string;
  story: string;
  other?: string;
  title: string;
  created_at?: Date;
  deactivated?: boolean;
  id: string;
}

export interface Gallery {
  key: string;
  url: string;
}

export interface EventModel {
  author?: Author;
  banner?: string;
  banner_key?: string;
  created_at?: number;
  deactivated?: boolean;
  description?: string;
  galleries?: Gallery[];
  homepage?: boolean;
  id: string;
  language?: string;
  link?: string;
  likes?: number;
  name?: string;
  public_date?: string;
  short_description?: string;
  tags?: Tag[];
  thumbnail?: string;
  thumbnail_key?: string;
  updated_at?: number;
}

export interface PopularQuestion {
  question: string;
  answer: string;
}

export interface SupportCentre {
  title: string;
}

export interface PressFikaMagazine {
  image: string;
  title: string;
  magBrand: string;
  date: string;
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

export interface MemberModel {
  avatar: string;
  avatar_key?: string;
  created_at?: number;
  deactivated?: boolean;
  facebook?: string;
  id: string;
  language: LanguageType;
  linkedin?: string;
  name: string;
  position: string;
  twitter?: string;
  updated_at?: number;
}

export interface QAModel {
  id: string;
  answers: string;
  banner: string;
  banner_key: string;
  created_at: string;
  deactivated: boolean;
  homepage: boolean;
  language: LanguageType;
  link: string;
  question: string;
  tags: Tag[];
  thumbnail: string;
  thumbnail_key: string;
  updated_at: string;
}
export interface JobModel {
  created_at: number;
  deactivated: boolean;
  department: string;
  expired_date: number;
  id: string;
  jd_file: string;
  job_title: string;
  language: LanguageType;
  position: string;
  updated_at: number;
}

export interface TagResponse {
  id: string;
  language?: string;
  name: string;
}

export interface CategoryHome {
  id?: string;
  name: string;
  type: string;
  banner?: string;
  banner_key?: string;
  thumbnail?: string;
  link: string;
  thumbnail_key?: string;
  homepage?: boolean;
  language?: LanguageType;
  deactivated?: boolean;
}
