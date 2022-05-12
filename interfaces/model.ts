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