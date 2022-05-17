import { EventApi } from "@api";
import { ApiListResponse, EventModel } from "@interfaces/model";
import { Tag } from "@interfaces/posts";
import { EventState } from "@redux/states";
import { RootState } from "@redux/store";
import {
  AnyAction,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import Router from "next/router";
import { ThunkDispatch } from "redux-thunk";

const initState: EventState = {
  events: [],
  query: {
    page: 1,
    limit: 6,
    deactivated: false,
  },
  total: 0,
  event_detail: undefined,
  eventLoading: false,
};

const eventSlice = createSlice({
  initialState: initState,
  name: "event",
  reducers: {
    loading: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
      state.eventLoading = true;
    },
    update_events: (
      state,
      action: PayloadAction<ApiListResponse<EventModel>>
    ) => {
      state.loading = false;
      state.events = action.payload.items;
      state.total = action.payload.total;
    },
    update_query: (state, { payload }) => {
      state.query = { ...state.query, ...payload };
    },
    update_event_detail: (state, { payload }) => {
      state.loading = false;
      state.event_detail = payload;
	  state.eventLoading = false;
    },
    error: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
	  state.eventLoading = false;
    },
    clear: (state) => initState,
  },
});

export const eventReducer = eventSlice.reducer;

export const { clear, update_query } = eventSlice.actions;

export function getAllEvents(id?: string, tags?: Tag[]) {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getStore: () => RootState
  ) => {
    dispatch(eventSlice.actions.loading());
    try {
      let { query } = getStore().event;
      let newQuery = { ...query };
      let tagList: string[] = [];
      if (tags) {
        tagList = tags.map((item) => item.id);
      }
      if (id) {
        newQuery.limit = 3;
        newQuery.page = 1;
        newQuery.tags = tagList;
        newQuery.post_ids = [id];
      }
      newQuery.language = Router.locale;
      let resp = await EventApi.fetchAllEvents(newQuery);
      if (resp) {
        dispatch(eventSlice.actions.update_events(resp));
      }
    } catch (error: any) {
      dispatch(eventSlice.actions.error(error.message));
    }
  };
}

export function getEventDetail(link: string) {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getStore: () => RootState
  ) => {
    dispatch(eventSlice.actions.loading());
    try {
      let resp = await EventApi.fetchEventById(link, Router.locale);
      if (resp) {
        dispatch(eventSlice.actions.update_event_detail(resp));
      }
    } catch (error: any) {
      dispatch(eventSlice.actions.error(error.message));
    }
  };
}
