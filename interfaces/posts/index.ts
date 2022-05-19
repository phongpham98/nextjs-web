import { ApiListResponse, CategoryHome } from "@interfaces/model";

export interface Author {
  id: string;
  name: string;
  username: string;
  avatar?: string;
  position?: string;
}

export interface CategoryItem {
  id?: string;
  name?: string;
  link?: string;
}

export interface Tag {
  id: string;
  name: string;
}

export type LanguageType = "en" | "vi";

export interface PostModel {
  id: string;
  title: string;
  banner: string;
  comments: number;
  contents: string;
  author: Author;
  tags: Tag[];
  likes: number;
  link: string;
  banner_key?: string;
  thumbnail?: string;
  thumbnail_key?: string;
  short_description?: string;
  category: CategoryItem;
  language?: LanguageType;
  homepage?: boolean;
  created_at: number;
  public_date?: number;
  updated_at?: number;
  deactivated?: boolean;
  seo_title?: string;
  seo_description?: string;
  seo_keywords?: string[];
}

export interface PostRequest {
  tags?: string[];
  post_ids?: string[];
  language?: string;
  page?: number;
  limit?: number;
  deactivated?: boolean;
  homepage?: boolean;
  highlight?: boolean;
  category?: string;
  website?: string;
}

export interface CategoryResponse extends ApiListResponse<PostModel> {
  category: CategoryHome;
}
