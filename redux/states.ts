import { AssignResult, InstaPost, PressMagazine, QuizItemModel, SearchModel, UserResult } from "@interfaces/model";
import { LanguageType, PostModel, PostRequest } from "@interfaces/posts";

interface BaseState {
  loading?: boolean;
  success?: boolean;
  error?: string | null;
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

export interface HomeState extends BaseState {
  categories?: CategoryHome[];
  latestNews?: PostModel[];
  highlightNews?: PostModel;
  sexAndLoveHighlight?: PostModel;
  zodiacHighlight?: PostModel;
  selfDevelopmentHighlight?: PostModel;
  showMenu: boolean;
  demographicVisible: boolean;
}

export interface MatchPerson {
  image: string;
  gender: "male" | "female";
  personalityType?: string;
}

export interface MatchCouple {
  first: MatchPerson;
  second: MatchPerson;
}

export interface MatchedState {
  matches: MatchCouple[];
}

export interface DiscoverState extends BaseState {
  blogs?: PostModel[];
  categoryCeoId: string;
  ctoBlogs?: PostModel;
}

export interface InstagramState {
  instagrams: InstaPost[];
}

export interface LatestNew {
  id?: string | number;
  content?: string;
}

export interface PressFikaState extends BaseState {
  highlightMags: PressMagazine[];
  magazines: PressMagazine[];
  news: LatestNew[];
  total: number;
  query: PostRequest;
}

export interface SearchState extends BaseState {
  results: SearchModel[];
  searchValue?: string;
}

export interface QuizPart {
	current_question_number: number;
	current_part_number: number;
	next_part_number: number;
  }

export interface QuizState extends BaseState {
	questions: QuizItemModel[];
	current_part: QuizItemModel | null;
	assign_result: AssignResult[];
	user_results: UserResult[];
	process: boolean;
	part: QuizPart;
  }
