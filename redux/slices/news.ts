import { NewsApi } from "@api";
import { ApiListResponse } from "@interfaces/model";
import { PostModel, Tag } from "@interfaces/posts";
import { AnotherPostRequest } from "@interfaces/request";
import { NewsState } from "@redux/states";
import { RootState } from "@redux/store";
import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Router from "next/router";
import { ThunkDispatch } from "redux-thunk";

const initState: NewsState = {
  loading: false,
  newsList: [],
  latestNews: [],
  query: {
    page: 1,
    limit: 9,
  },
  total: 0,
  error: null,
  nextBlog: undefined,
  prevBlog: undefined,
  loadMoreNews: [],
  newsDetail: undefined,
  success: false,
};

const newsSlice = createSlice({
  initialState: initState,
  name: "news",
  reducers: {
    update_news_list: (
      state,
      action: PayloadAction<ApiListResponse<PostModel>>
    ) => {
      state.loading = false;
      state.newsList = [...state.newsList.concat(action.payload.items)];
      state.total = action.payload.total;
    },
    update_latest_news: (state, { payload }) => {
      state.latestNews = payload;
      state.loading = false;
    },
    update_more_news: (state, { payload }) => {
      state.loadMoreNews = [...state.loadMoreNews?.concat(payload)];
      state.loading = false;
    },
    update_news_detail: (state, { payload }) => {
      state.newsDetail = payload;
      state.loading = false;
    },
    loading: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    update_query: (state, { payload }) => {
      state.query = payload;
      state.loading = false;
    },
    update_next_blog: (state, { payload }) => {
      state.loading = false;
      state.nextBlog = payload;
    },
    update_prev_blog: (state, { payload }) => {
      state.loading = false;
      state.prevBlog = payload;
    },
    update_news_likes: (state) => {
      state.newsDetail = state.newsDetail
        ? { ...state.newsDetail, likes: state.newsDetail.likes + 1 }
        : state.newsDetail;
    },
    error: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    clear: (state) => initState,
  },
});

export const newsReducer = newsSlice.reducer;
export const { update_query, clear, update_news_likes, update_news_detail } =
  newsSlice.actions;

export function getLatestNews(tags?: string[]) {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getStore: () => RootState
  ) => {
    dispatch(newsSlice.actions.loading());
    let { query } = getStore().news;
    let newQuery = { ...query };

    newQuery.limit = 3;
    newQuery.page = 1;
    newQuery.deactivated = false;
    newQuery.tags = tags ? tags : [];
    newQuery.language = Router.locale;
    let response = await NewsApi.fetchListNews(newQuery);
    if (response) {
      dispatch(newsSlice.actions.update_latest_news(response.items));
    }
    try {
    } catch (error: any) {
      dispatch(newsSlice.actions.error(error.message));
    }
  };
}

export function getListNews(id?: string, tags?: Tag[]) {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getStore: () => RootState
  ) => {
    dispatch(newsSlice.actions.loading());
    let { query } = getStore().news;
    let newQuery = { ...query };

    if (id) {
      newQuery.post_ids = [id];
      newQuery.limit = 6;
      newQuery.page = 1;
    }
    if (tags && tags.length > 0) {
      let list = tags.map((tag) => tag.id);
      newQuery.tags = list;
    }
    newQuery.deactivated = false;
    newQuery.language = Router.locale;
    let response = await NewsApi.fetchListNews(newQuery);
    if (response) {
      dispatch(newsSlice.actions.update_news_list(response));
    }
    try {
    } catch (error: any) {
      dispatch(newsSlice.actions.error(error.message));
    }
  };
}

export function getMoreNews(tags?: Tag[]) {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getStore: () => RootState
  ) => {
    dispatch(newsSlice.actions.loading());
    const { query } = getStore().news;
    let newQuery = { ...query };
    newQuery.deactivated = false;
    newQuery.language = Router.locale;
    if (tags && tags.length > 0) {
      let list = tags.map((tag) => tag.id);
      newQuery.tags = list;
    }
    let response = await NewsApi.fetchListNews(newQuery);
    if (response) {
      dispatch(newsSlice.actions.update_more_news(response.items));
    }
    try {
    } catch (error: any) {
      dispatch(newsSlice.actions.error(error.message));
    }
  };
}

export function getNewsDetail(link?: string, id?: string) {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getStore: () => RootState
  ) => {
    dispatch(newsSlice.actions.loading());

    let response = await NewsApi.fetchNewsByLinkOrId(link, id, Router.locale);
    if (response) {
      dispatch(newsSlice.actions.update_news_detail(response));
    }
    try {
    } catch (error: any) {
      dispatch(newsSlice.actions.error(error.message));
    }
  };
}

export function getNextPost(id: string, publishDate: number) {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getStore: () => RootState
  ) => {
    try {
      const query: AnotherPostRequest = {
        id: id,
        public_date: publishDate,
      };
      const response = await NewsApi.fetchNextPost(query);
      if (response) {
        dispatch(newsSlice.actions.update_next_blog(response));
      }
    } catch (error: any) {
      dispatch(newsSlice.actions.error(error.message));
    }
  };
}

export function getPrevPost(id: string, publishDate: number) {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getStore: () => RootState
  ) => {
    try {
      const query: AnotherPostRequest = {
        id: id,
        public_date: publishDate,
      };
      const response = await NewsApi.fetchPrevPost(query);
      if (response) {
        dispatch(newsSlice.actions.update_prev_blog(response));
      }
    } catch (error: any) {
      dispatch(newsSlice.actions.error(error.message));
    }
  };
}
