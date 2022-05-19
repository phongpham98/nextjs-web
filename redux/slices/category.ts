import { fetchCategoryById } from './../../api/_api/category';
import { CategoryApi } from "@api";
import { CategoryResponse, PostRequest, Tag } from "@interfaces/posts";
import { CategoryRequest } from "@interfaces/request";
import { CategoryState } from "@redux/states";
import { RootState } from "@redux/store";
import {
  AnyAction,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import Router from "next/router";
import { ThunkDispatch } from "redux-thunk";

const initState: CategoryState = {
  category: null,
  blogs: [],
  total: 0,
  loading: false,
  error: null,
  success: false,
  query: {
    cate_id: "",
    page: 1,
    limit: 9,
  },
  loadBlogs: [],
  tags: [],
};

const categorySlice = createSlice({
  initialState: initState,
  name: "category",
  reducers: {
    loading: (state) => {
      state.loading = true;
      state.error = null;
    },
    update_category: (state, action: PayloadAction<CategoryResponse>) => {
      state.loading = false;
      state.category = action.payload.category;
      state.blogs = action.payload.items;
      state.total = action.payload.total;
    },
    update_blogs: (state, action: PayloadAction<CategoryResponse>) => {
      state.loading = false;
      state.blogs = action.payload.items;
      state.total = action.payload.total;
    },
    update_query: (state, { payload }) => {
      state.query = payload;
    },
    update_cate: (state, { payload }) => {
      state.loading = false;
      state.category = payload;
    },
    update_load_blogs: (state, { payload }) => {
      state.loading = false;
      state.loadBlogs = payload;
    },
    update_tags: (state, { payload }) => {
      state.loading = false;
      state.tags = payload;
    },
    error: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    clear: () => initState,
  },
});

export const categoryReducer = categorySlice.reducer;
export const { update_query, clear, update_cate } = categorySlice.actions;

export function getCategoryByLink(link: string, tags?: Tag[]) {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getStore: () => RootState
  ) => {
    dispatch(categorySlice.actions.loading());
    try {
      const q: PostRequest = {
        page: 1,
        deactivated: false,
        limit: tags ? 6 : 9,
        category: link,
      };
      if (tags && tags.length > 0) {
        let list = tags.map((tag) => tag.id);
        q.tags = list;
      }
      const response = await CategoryApi.fetchBlogs(q);
	  console.log(response)
      if (response) {
        dispatch(categorySlice.actions.update_blogs(response));
      }
    } catch (error: any) {
		console.log('error,', error)
      dispatch(categorySlice.actions.error(error.message));
    }
  };
}

export function getCategorySingle(link: string, tag?: string[]) {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getStore: () => RootState
  ) => {
    try {
      const query = { ...getStore().category.query, cate_id: link, };
      // query.cate_id = id;
	  query.language = Router.locale
      const response = await CategoryApi.fetchCategoryById(query);
      if (response) {
        dispatch(categorySlice.actions.update_category(response));
      }
    } catch (error: any) {}
  };
}

export function loadMoreBlogs() {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getStore: () => RootState
  ) => {
    try {
      const { query, loadBlogs } = getStore().category;
      const q: CategoryRequest = {
        page: query?.page,
        limit: query?.limit,
        cate_id: query?.cate_id,
		language: Router.locale
      };
      const response = await CategoryApi.fetchCategoryById(q);
      if (response) {
        dispatch(
          categorySlice.actions.update_load_blogs(
            loadBlogs?.concat(response.items)
          )
        );
      }
    } catch (error: any) {
      dispatch(categorySlice.actions.error(error.message));
    }
  };
}

export function getTags() {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getStore: () => RootState
  ) => {
    try {
      const response = await CategoryApi.fetchTags(Router.locale);
      if (response) {
        dispatch(categorySlice.actions.update_tags(response));
      }
    } catch (error: any) {
      dispatch(categorySlice.actions.error(error.message));
    }
  };
}
