import { CommentApi, TrackViewsApi } from "@api";
import { ApiListResponse, CommentModel } from "@interfaces/model";
import { CommentRequest, GetCommentRequest } from "@interfaces/request";
import { CommentState } from "@redux/states";
import { RootState } from "@redux/store";
import {
	AnyAction,
	createSlice,
	PayloadAction,
  } from "@reduxjs/toolkit";
import Router from "next/router";
import { ThunkDispatch } from "redux-thunk";
  
  const initState: CommentState = {
	comments: [],
	loading: false,
	success: false,
	error: null,
	total: 0,
	isReply: false,
	commentId: "",
	commentReplied: null,
  };
  
  const blogCommentSlice = createSlice({
	initialState: initState,
	name: "blog-comment",
	reducers: {
	  loading: (state) => {
		state.loading = true;
		state.success = false;
		state.error = null;
	  },
	  update_comments: (
		state,
		action: PayloadAction<ApiListResponse<CommentModel>>
	  ) => {
		state.comments = action.payload.items;
		state.loading = false;
		state.total = action.payload.total;
	  },
	  success: (state) => {
		state.loading = false;
		state.success = true;
		state.error = null;
	  },
	  set_comment_replied: (state, { payload }) => {
		state.commentReplied = payload;
	  },
	  set_reply: (state, { payload }) => {
		state.isReply = true;
		state.commentId = payload;
	  },
	  reset_reply: (state) => {
		state.isReply = false;
		state.commentId = "";
		state.commentReplied = null;
	  },
	  error: (state, { payload }) => {
		state.loading = false;
		state.error = payload;
		state.success = false;
	  },
	},
  });
  
  export const blogCommentReducer = blogCommentSlice.reducer;
  
  export const { set_reply, set_comment_replied, reset_reply } =
	blogCommentSlice.actions;
  
  export function sendComment(form: CommentRequest) {
	return async (
	  dispatch: ThunkDispatch<{}, {}, AnyAction>,
	  getStore: () => RootState
	) => {
	  dispatch(blogCommentSlice.actions.loading());
	  try {
		const response = await CommentApi.postComment(form);
		if (response) {
		  dispatch(blogCommentSlice.actions.success());
		  dispatch(blogCommentSlice.actions.reset_reply());
		}
	  } catch (error: any) {
		dispatch(blogCommentSlice.actions.error(error.message));
	  }
	};
  }
  
  export function getCommentsById(id: string) {
	return async (
	  dispatch: ThunkDispatch<{}, {}, AnyAction>,
	  getStore: () => RootState
	) => {
	  dispatch(blogCommentSlice.actions.loading());
	  try {
		const query: GetCommentRequest = {
		  post_id: id,
		  page: 1,
		  limit: 10,
		  language: Router.locale
		};
		const response = await CommentApi.getComments(query);
		if (response) {
		  dispatch(blogCommentSlice.actions.update_comments(response));
		}
	  } catch (error: any) {
		dispatch(blogCommentSlice.actions.error(error.message));
	  }
	};
  }
  
  export function likeCommentById(id: string) {
	return async (
	  dispatch: ThunkDispatch<{}, {}, AnyAction>,
	  getStore: () => RootState
	) => {
	  dispatch(blogCommentSlice.actions.loading());
	  try {
		const response = await CommentApi.likeComment(id);
		if (response) {
		  dispatch(blogCommentSlice.actions.success());
		}
	  } catch (error: any) {
		dispatch(blogCommentSlice.actions.error(error.message));
	  }
	};
  }
  
  export function trackViews(id: string) {
	return async (
	  dispatch: ThunkDispatch<{}, {}, AnyAction>,
	  getStore: () => RootState
	) => {
	  try {
		await TrackViewsApi.trachViews(id);
	  } catch (error: any) {
		console.log("error", error.message);
	  }
	};
  }
  