import { PersonalityApi } from "@api";
import { PersonalityTypeState } from "@redux/states";
import { RootState } from "@redux/store";
import { AnyAction, createSlice } from "@reduxjs/toolkit";
import Router from "next/router";
import { ThunkDispatch } from "redux-thunk";
const initState: PersonalityTypeState = {
  content: null,
};

const personalityTypeSlice = createSlice({
  initialState: initState,
  name: "personality-type",
  reducers: {
    loading: (state) => {
      state.loading = true;
    },
    update_content: (state, { payload }) => {
      state.content = payload;
      state.loading = false;
    },
    error: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
  },
});

export const personalityTypeReducer = personalityTypeSlice.reducer;

export const getPersonalityContent = (type: string) => {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getStore: () => RootState
  ) => {
    dispatch(personalityTypeSlice.actions.loading());
    try {
      const response = await PersonalityApi.fetchPersonalityType(type, Router.locale);
      if (response) {
        dispatch(personalityTypeSlice.actions.update_content(response));
      }
    } catch (error: any) {
      dispatch(personalityTypeSlice.actions.error(error.message));
    }
  };
};
