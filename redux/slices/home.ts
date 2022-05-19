import { HomeApi, NewsApi } from "@api";
import { categoryLink } from "@configs/general";
import currentLocale from "@helpers/getCurrentLocale";
import { PostRequest } from "@interfaces/posts";
import { CategoryHomeRequest, CategoryRequest } from "@interfaces/request";
import { HomeState } from "@redux/states";
import { RootState } from "@redux/store";
import { AnyAction, createSlice, ThunkAction } from "@reduxjs/toolkit";
import Router from "next/router";
import { ThunkDispatch } from "redux-thunk";

const initState: HomeState = {
  categories: [],
  latestNews: [],
  zodiacHighlight: undefined,
  highlightNews: undefined,
  selfDevelopmentHighlight: undefined,
  sexAndLoveHighlight: undefined,
  error: null,
  loading: false,
  success: false,
  showMenu: false,
  demographicVisible: false,
};

const homeSlice = createSlice({
  initialState: initState,
  name: "home",
  reducers: {
    loading: (state) => {
      state.loading = true;
      state.error = null;
    },
    update_categories: (state, { payload }) => {
      state.loading = false;
      state.categories = payload;
    },
    update_latest_news: (state, { payload }) => {
      state.loading = false;
      state.latestNews = payload;
    },
    update_highlight_news: (state, { payload }) => {
      state.highlightNews = payload;
      state.loading = false;
    },
    update_highlight_self_development: (state, { payload }) => {
      state.selfDevelopmentHighlight = payload;
      state.loading = false;
    },
    update_highlight_zodiac: (state, { payload }) => {
      state.zodiacHighlight = payload;
      state.loading = false;
    },
    update_highlight_sex_n_love: (state, { payload }) => {
      state.sexAndLoveHighlight = payload;
      state.loading = false;
    },
    toglle_menu: (state) => {
      state.showMenu = !state.showMenu;
    },
    open_demographic_modal: (state) => {
      state.demographicVisible = true;
    },
    close_demographic_modal: (state) => {
      state.demographicVisible = false;
    },
    error: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const homeReducer = homeSlice.reducer;

export const {
  toglle_menu,
  open_demographic_modal,
  close_demographic_modal,
  update_latest_news,
} = homeSlice.actions;

export function getCategories() {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getStore: () => RootState
  ) => {
    try {
      const query: CategoryHomeRequest = {
        homepage: true,
        deactivated: false,
        language: Router.locale,
      };
      const response = await HomeApi.getCategories(query);
      if (response) dispatch(homeSlice.actions.update_categories(response));
    } catch (err: any) {
      dispatch(homeSlice.actions.error(err.message));
    }
  };
}
declare module "redux" {
  interface Dispatch<A extends Action = AnyAction> {
    <S, E, R>(asyncAction: ThunkAction<R, S, E, A>): R;
  }
}

export function getLatestNews(highlight = false) {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const query: PostRequest = {
        page: 1,
        limit: 10,
        highlight: highlight,
        deactivated: false,
        language: Router.locale,
      };

      const response = await HomeApi.fetchLatestNews(query);
      if (response)
        dispatch(homeSlice.actions.update_latest_news(response.items));
    } catch (err: any) {
      dispatch(homeSlice.actions.error(err.message));
    }
  };
}

export function getHighlightNews() {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getStore: () => RootState
  ) => {
    dispatch(homeSlice.actions.loading());
    try {
      let postId: string[] = [];
      getStore().home.latestNews?.forEach((item) => {
        postId.push(item.id);
      });

      const query: PostRequest = {
        post_ids: postId,
        page: 1,
        limit: 1,
        highlight: false,
        deactivated: false,
        language: Router.locale,
      };

      const response = await NewsApi.fetchListNews(query);
      if (response)
        dispatch(homeSlice.actions.update_highlight_news(response.items[0]));
    } catch (err: any) {
      dispatch(homeSlice.actions.error(err.message));
    }
  };
}

export function getSelfDevelopmentHighlight() {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getStore: () => RootState
  ) => {
    dispatch(homeSlice.actions.loading());
    try {
      const locale = currentLocale();
      const query: CategoryRequest = {
        cate_id: categoryLink.self_development[locale],
        page: 1,
        limit: 1,
        language: locale,
      };

      const resp = await HomeApi.fetchCeoBlog(query);
      if (resp)
        dispatch(
          homeSlice.actions.update_highlight_self_development(resp.items[0])
        );
    } catch (err: any) {
      dispatch(homeSlice.actions.error(err.message));
    }
  };
}

export function getZodiacHighlight() {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getStore: () => RootState
  ) => {
    dispatch(homeSlice.actions.loading());
    try {
      const locale = currentLocale();
      const query: CategoryRequest = {
        cate_id: categoryLink.personalities[locale],
        page: 1,
        limit: 1,
        language: locale,
      };

      const response = await HomeApi.fetchCeoBlog(query);
      if (response)
        dispatch(homeSlice.actions.update_highlight_zodiac(response.items[0]));
    } catch (err: any) {
      dispatch(homeSlice.actions.error(err.message));
    }
  };
}
export function getSexAndLoveHighlight() {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(homeSlice.actions.loading());
    try {
      const locale = currentLocale();
      const query: CategoryRequest = {
        cate_id: categoryLink.love_n_sex_advice[locale],
        page: 1,
        limit: 1,
        language: locale,
      };

      const response = await HomeApi.fetchCeoBlog(query);
      if (response)
        dispatch(
          homeSlice.actions.update_highlight_sex_n_love(response.items[0])
        );
    } catch (err: any) {
      dispatch(homeSlice.actions.error(err.message));
    }
  };
}
