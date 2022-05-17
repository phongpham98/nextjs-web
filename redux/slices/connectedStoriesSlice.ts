import { ConnectedStoryApi } from "@api";
import { ApiListResponse, StoryModel } from "@interfaces/model";
import { PostModel, PostRequest, Tag } from "@interfaces/posts";
import { ConnectedStoryState } from "@redux/states";
import { RootState } from "@redux/store";
import {
  AnyAction,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import Router from "next/router";
import { ThunkDispatch } from "redux-thunk";

const initState: ConnectedStoryState = {
  stories: [],
  query: {
    page: 1,
    limit: 6,
  },
  storyDetail: undefined,
  total: 0,
  isOpenModal: false,
  detailLoading: false,
};

const loveStorySlice = createSlice({
  initialState: initState,
  name: "love-story",
  reducers: {
    loading: (state) => {
      state.loading = true;
      state.error = null;
	  state.detailLoading = true
    },
    upload_stories: (
      state,
      action: PayloadAction<ApiListResponse<StoryModel>>
    ) => {
      state.loading = false;
      state.stories = [...state.stories.concat(action.payload.items)];
      state.total = action.payload.total;
    },
    update_more_stories: (state, { payload }) => {
      state.loading = false;
      state.stories = payload;
    },
    update_query: (state, { payload }) => {
      state.query = { ...state.query, ...payload };
    },
    update_story_detail: (state, { payload }) => {
      state.loading = false;
      state.storyDetail = payload;
	  state.detailLoading = false;
    },
    toggle_modal: (state) => {
      state.isOpenModal = !state.isOpenModal;
    },
    clear: (state) => initState,
    error: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
	  state.detailLoading = false
    },
  },
});

export const loveStoryReducer = loveStorySlice.reducer;

export const { update_query, clear, toggle_modal, update_story_detail } = loveStorySlice.actions;

export function getConnectedStories(ids?: string[], tags?: Tag[]) {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getStore: () => RootState
  ) => {
    dispatch(loveStorySlice.actions.loading());
    try {
      const { query } = getStore().loveStory;
      const q: PostRequest = {
        page: ids ? 1 : query.page,
        limit: query.limit,
        post_ids: ids ? ids : undefined,
		language: Router.locale,
        deactivated: false,
      };
      if (tags && tags.length > 0) {
        const list = tags.map((tag) => tag.id);
        q.tags = list;
      }
      const response = await ConnectedStoryApi.fetchConnectedStories(q);
      if (response) {
        if (ids) {
          dispatch(loveStorySlice.actions.update_more_stories(response.items));
        } else dispatch(loveStorySlice.actions.upload_stories(response));
      }
    } catch (error: any) {
      dispatch(loveStorySlice.actions.error(error.message));
    }
  };
}

export function getStoryDetail(link?: string, id?: string) {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getStore: () => RootState
  ) => {
    dispatch(loveStorySlice.actions.loading());
    try {
      const response = await ConnectedStoryApi.fetchStoryById(link, id);
      if (response) {
        dispatch(loveStorySlice.actions.update_story_detail(response));
      }
    } catch (error: any) {
      dispatch(loveStorySlice.actions.error(error.message));
    }
  };
}
