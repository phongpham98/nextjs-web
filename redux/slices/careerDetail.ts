import { CareerDetailApi, JobApi } from "@api";
import { CVRequest } from "@interfaces/request";
import { CareerDetailState } from "@redux/states";
import { RootState } from "@redux/store";
import { AnyAction, createSlice } from "@reduxjs/toolkit";
import { groupBy } from "lodash";
import Router from "next/router";
import { ThunkDispatch } from "redux-thunk";

const initState: CareerDetailState = {
  total: 0,
  jobs: [],
  jobs_by_department: null,
  success: false,
  loading: false,
  error: null,
};

const careerDetailSlice = createSlice({
  initialState: initState,
  name: "career-detail",
  reducers: {
    loading: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    send_cv_success: (state) => {
      state.success = true;
      state.loading = false;
    },
    update_jobs: (state, { payload }) => {
      state.jobs = payload;
      state.loading = false;
    },
    update_jobs_by_department: (state, { payload }) => {
      state.jobs_by_department = payload;
      state.loading = false;
    },
    error: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const careerDetailReducer = careerDetailSlice.reducer;

export function sendCV(form: CVRequest) {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getStore: () => RootState
  ) => {
    dispatch(careerDetailSlice.actions.loading());
    try {
      const response = await CareerDetailApi.sendCV(form);
      if (response) {
        dispatch(careerDetailSlice.actions.send_cv_success());
      }
    } catch (error: any) {
      dispatch(careerDetailSlice.actions.error(error.message));
    }
  };
}

export function getJobs() {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getStore: () => RootState
  ) => {
    dispatch(careerDetailSlice.actions.loading());
    try {
      const response = await JobApi.fetchJobs(Router.locale);
      if (response) {
        const result = groupBy(response.items, "department");
        dispatch(careerDetailSlice.actions.update_jobs(response.items));
        dispatch(careerDetailSlice.actions.update_jobs_by_department(result));
      }
    } catch (error: any) {
      dispatch(careerDetailSlice.actions.error(error.message));
    }
  };
}
