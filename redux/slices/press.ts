import { PressApi } from "@api";
import { ApiListResponse, PressMagazine } from "@interfaces/model";
import { PressFikaState } from "@redux/states";
import { RootState } from "@redux/store";
import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThunkDispatch } from "redux-thunk";

const initState: PressFikaState = {
  magazines: [],
  highlightMags: [],
  news: [
    {
      id: 1,
      content:
        "Breakit - Hennes dejtingapp får in miljoner – backas av tunga investerare",
    },
    {
      id: 2,
      content:
        "E27 - Vietnam’s AI-powered female-focused dating app Fika nets US$1.6M led by Swedish investor",
    },
  ],
  loading: false,
  success: false,
  error: null,
  total: 0,
  query: {
    page: 1,
    limit: 100,
    deactivated: false,
  },
};

const pressFikaSlice = createSlice({
  initialState: initState,
  name: "fika-in-the-press",
  reducers: {
    loading: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    error: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    clear: () => initState,
    update_highlight_mags: (state, { payload }) => {
      state.highlightMags = payload;
      state.loading = false;
    },
    update_mags: (
      state,
      action: PayloadAction<ApiListResponse<PressMagazine>>
    ) => {
      state.magazines = action.payload.items;
      state.total = action.payload.total;
    },
  },
});

export const pressFikaReducer = pressFikaSlice.reducer;

export function getPresses() {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getStore: () => RootState
  ) => {
    dispatch(pressFikaSlice.actions.loading());
    try {
      const query = { ...getStore().press.query };
      const response = await PressApi.fetchPresses(query);
      if (response) {
        dispatch(pressFikaSlice.actions.update_mags(response));
      }
    } catch (error: any) {
      dispatch(pressFikaSlice.actions.error(error.message));
    }
  };
}
