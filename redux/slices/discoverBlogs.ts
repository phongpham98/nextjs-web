import { HomeApi } from "@api";
import { categoryLink } from "@configs/general";
import currentLocale from "@helpers/getCurrentLocale";
import { CategoryRequest } from "@interfaces/request";
import { DiscoverState } from "@redux/states";
import { RootState } from "@redux/store";
import { AnyAction, createSlice } from "@reduxjs/toolkit";
import { ThunkDispatch } from "redux-thunk";

const initialState: DiscoverState = {
  error: null,
  blogs: [],
  loading: false,
  categoryCeoId: "",
  ctoBlogs: undefined,
};

const discoverSlice = createSlice({
  initialState: initialState,
  name: "discover-blogs",
  reducers: {
    loading: (state) => {
      state.loading = true;
      state.error = null;
    },
    update: (state, { payload }) => {
      state.loading = false;
      state.blogs = payload;
    },
    update_ceo_categoryId: (state, { payload }) => {
      state.loading = false;
      state.categoryCeoId = payload;
    },
    update_cto_blogs: (state, { payload }) => {
      state.loading = false;
      state.ctoBlogs = payload;
    },
    error: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const discoverReducer = discoverSlice.reducer;

export function getCTOBlogs() {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getStore: () => RootState
  ) => {
    dispatch(discoverSlice.actions.loading());
    try {
      const locale = currentLocale();
      const query: CategoryRequest = {
        cate_id: categoryLink.cto[locale],
        page: 1,
        limit: 1,
      };

      const resp = await HomeApi.fetchCeoBlog(query);
      if (resp) dispatch(discoverSlice.actions.update_cto_blogs(resp.items[0]));
    } catch (err: any) {
      dispatch(discoverSlice.actions.error(err.message));
    }
  };
}

export function getCeoBlogs() {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getStore: () => RootState
  ) => {
    try {
      const locale = currentLocale();
      const query: CategoryRequest = {
        cate_id: categoryLink.ceo[locale],
        page: 1,
        limit: 2,
      };
      const resp = await HomeApi.fetchCeoBlog(query);
      if (resp) {
        dispatch(discoverSlice.actions.update(resp.items));
      }
    } catch (err: any) {
      dispatch(discoverSlice.actions.error(err.message));
    }
  };
}
