import { SendStoryApi } from "@api";
import { StoryRequest } from "@interfaces/request";
import { SendStoryState } from "@redux/states";
import { RootState } from "@redux/store";
import { AnyAction, createSlice } from "@reduxjs/toolkit";
import { ThunkDispatch } from "redux-thunk";

const initState: SendStoryState = {
  loading: false,
  error: null,
  success: false,
};

const sendStorySlice = createSlice({
  initialState: initState,
  name: "love-story",
  reducers: {
    loading: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    success: (state) => {
      state.success = true;
      state.loading = false;
    },
    clear: (state) => initState,
    error: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const sendStoryReducer = sendStorySlice.reducer;

export function sendStory(form: StoryRequest) {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getStore: () => RootState
  ) => {
    dispatch(sendStorySlice.actions.loading());
    try {
      const resp = await SendStoryApi.postStory(form);
      if (resp) {
        const sendStory = await SendStoryApi.uploadStoryImages(
          resp.id,
          form.files
        );
        if (sendStory) {
          dispatch(sendStorySlice.actions.success());
        }
      }
    } catch (error: any) {
      dispatch(sendStorySlice.actions.error(error.message));
    }
  };
}
