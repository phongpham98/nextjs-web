import { SearchApi } from "@api";
import { SearchRequest } from "@interfaces/request";
import { SearchState } from "@redux/states";
import { RootState } from "@redux/store";
import { AnyAction, createSlice } from "@reduxjs/toolkit";
import { ThunkDispatch } from "redux-thunk";
const initState: SearchState = {
  results: [],
  searchValue: ''
};

const searchSlice = createSlice({
  name: "search",
  initialState: initState,
  reducers: {
    loading: (state, {payload}) => {
      state.loading = true;
	  state.searchValue = payload;
    },
    update_result: (state, { payload }) => {
      state.loading = false;
      state.results = payload;
    },
	update_search_value: (state, {payload}) => {
		state.searchValue = payload;
	},
    error: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    clear: () => initState,
  },
});

export const searchReducer = searchSlice.reducer;

export const { clear } = searchSlice.actions;

export function debounceSearch(search: string) {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getStore: () => RootState
  ) => {
    dispatch(searchSlice.actions.loading(search));
    try {
      const q: SearchRequest = {
        q: search,
        page: 1,
        limit: 10,
      };
      const response = await SearchApi.search(q);
      if (response) {
        dispatch(searchSlice.actions.update_result(response));
      }
    } catch (error: any) {
      dispatch(searchSlice.actions.error(error.message));
    }
  };
}
