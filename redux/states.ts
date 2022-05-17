import {
  AssignResult,
  CommentModel,
  EventModel,
  InstaPost,
  MemberModel,
  PressMagazine,
  QAModel,
  QuizItemModel,
  SearchModel,
  StoryModel,
  UserResult,
} from "@interfaces/model";
import { LanguageType, PostModel, PostRequest } from "@interfaces/posts";
import { QueryModel } from "@interfaces/request";

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

export interface PersonalityTypeState extends BaseState {
  content: AssignResult | null;
}

export interface BlogState extends BaseState {
  latestBlogs?: PostModel[];
  blogs: PostModel[];
  query?: PostRequest;
  loadBlogs?: PostModel[];
  total: number;
  blogDetail?: PostModel;
  likes?: number;
  nextBlog?: PostModel;
  prevBlog?: PostModel;
}

export interface NewsState extends BaseState {
  newsList: PostModel[];
  query?: PostRequest;
  loadMoreNews: PostModel[];
  total: number;
  newsDetail?: PostModel;
  latestNews?: PostModel[];
  nextBlog?: PostModel;
  prevBlog?: PostModel;
}

export interface CommentState extends BaseState {
  comments: CommentModel[];
  total: number;
  isReply: boolean;
  commentId: string;
  commentReplied: CommentModel | null;
}

export interface ConnectedStoryState extends BaseState {
  stories: StoryModel[];
  query: QueryModel;
  total: number;
  storyDetail?: StoryModel;
  isOpenModal: boolean;
  detailLoading?: boolean;
}

export interface SendStoryState extends BaseState {}

export interface EventState extends BaseState {
  events: EventModel[];
  total: number;
  query: PostRequest;
  event_detail?: EventModel;
  eventLoading?: boolean;
}

export interface PressFikaState extends BaseState {
  highlightMags: PressMagazine[];
  magazines: PressMagazine[];
  news: LatestNew[];
  total: number;
  query: PostRequest;
}

export interface FikaTeamState extends BaseState {
  members: MemberModel[];
  total?: number;
  query: PostRequest;
  ceo: MemberModel | null;
  cto: MemberModel | null;
}

export interface QAState extends BaseState {
  qas: QAModel[];
  query: PostRequest;
  isOpenModal: boolean;
  total: number;
  qaDetail: QAModel | null;
}
