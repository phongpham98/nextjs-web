import { BlogApi } from "@api";
import { ApiListResponse } from "@interfaces/model";
import { PostModel, PostRequest, Tag } from "@interfaces/posts";
import { AnotherPostRequest } from "@interfaces/request";
import { BlogState } from "@redux/states";
import { RootState } from "@redux/store";
import {
  AnyAction,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { ThunkDispatch } from "redux-thunk";

const initState: BlogState = {
  error: null,
  loading: true,
  latestBlogs: [],
  success: false,
  blogs: [],
  loadBlogs: [],
  nextBlog: undefined,
  prevBlog: undefined,
  blogDetail: undefined,
  total: 0,
  query: {
    limit: 9,
    page: 1,
  },
};

const blogSlice = createSlice({
  name: "blog-page",
  initialState: initState,
  reducers: {
    loading: (state) => {
      state.loading = true;
      state.error = null;
    },
    update_blogs: (
      state,
      action: PayloadAction<ApiListResponse<PostModel>>
    ) => {
      state.loading = false;
      state.blogs = [...state.blogs.concat(action.payload.items)];
      state.total = action.payload.total;
    },
    update_load_blogs: (state, { payload }) => {
      state.loading = false;
      state.loadBlogs = payload;
    },
    update_query: (state, { payload }) => {
      state.query = payload;
    },
    update_blog_detail: (state, { payload }) => {
      state.loading = false;
      state.blogDetail = payload;
    },
    update_latest_blogs: (state, { payload }) => {
      state.loading = false;
      state.latestBlogs = payload;
    },
    update_likes: (state) => {
      state.blogDetail = state.blogDetail
        ? { ...state.blogDetail, likes: state.blogDetail.likes + 1 }
        : state.blogDetail;
    },
    update_next_blog: (state, { payload }) => {
      state.loading = false;
      state.nextBlog = payload;
    },
    update_prev_blog: (state, { payload }) => {
      state.loading = false;
      state.prevBlog = payload;
    },
    error: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    clear: (state) => initState,
  },
});

export const blogReducer = blogSlice.reducer;
export const { update_query, clear, update_blog_detail, update_likes } =
  blogSlice.actions;

export function getLatestBlogs(tags?: string[]) {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getStore: () => RootState
  ) => {
    dispatch(blogSlice.actions.loading());
    try {
      const q: PostRequest = {
        page: 1,
        limit: 3,
        deactivated: false,
        tags: tags ? tags : [],
      };
      const response = await BlogApi.fetchBlogs(q);
      if (response) {
        dispatch(blogSlice.actions.update_latest_blogs(response.items));
      }
    } catch (error: any) {
      dispatch(blogSlice.actions.error(error.message));
    }
  };
}

export function getBlogs(tags?: Tag[], ids?: string[]) {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getStore: () => RootState
  ) => {
    dispatch(blogSlice.actions.loading());
    try {
      const q: PostRequest = {
        page: 1,
        deactivated: false,
        limit: tags ? 6 : 9,
        post_ids: ids ? ids : [],
      };
      if (tags && tags.length > 0) {
        let list = tags.map((tag) => tag.id);
        q.tags = list;
      }
      const response = await BlogApi.fetchBlogs(q);
      if (response) {
        dispatch(blogSlice.actions.update_blogs(response));
      }
    } catch (error: any) {
      dispatch(blogSlice.actions.error(error.message));
    }
  };
}

export function loadMoreBlogs(tags?: Tag[]) {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getStore: () => RootState
  ) => {
    try {
      const { query, loadBlogs } = getStore().blog;
      const q: PostRequest = {
        page: query?.page,
        limit: query?.limit,
        deactivated: false,
      };
      if (tags && tags.length > 0) {
        let list = tags.map((tag) => tag.id);
        q.tags = list;
      }
      const response = await BlogApi.fetchBlogs(q);
      if (response) {
        dispatch(
          blogSlice.actions.update_load_blogs(loadBlogs?.concat(response.items))
        );
      }
    } catch (error: any) {
      dispatch(blogSlice.actions.error(error.message));
    }
  };
}

export function getBlogDetail(link?: string, id?: string, setLoading?: any) {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getStore: () => RootState
  ) => {
    dispatch(blogSlice.actions.loading());
    try {
      const response = await BlogApi.getchBlogDetail(link, id);
      if (response) {
        dispatch(blogSlice.actions.update_blog_detail(response));
      }
    } catch (error: any) {
      dispatch(blogSlice.actions.error(error.message));
    }
  };
}

export function getNextPost(link: string, publishDate: number) {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getStore: () => RootState
  ) => {
    try {
      const query: AnotherPostRequest = {
        id: link,
        public_date: publishDate,
      };
      const response = await BlogApi.fetchNextPost(query);
      if (response) {
        dispatch(blogSlice.actions.update_next_blog(response));
      }
    } catch (error: any) {
      dispatch(blogSlice.actions.error(error.message));
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
      const response = await BlogApi.fetchPrevPost(query);
      if (response) {
        dispatch(blogSlice.actions.update_prev_blog(response));
      }
    } catch (error: any) {
      dispatch(blogSlice.actions.error(error.message));
    }
  };
}
