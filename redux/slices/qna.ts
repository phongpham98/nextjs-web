import { QaApi } from "@api";
import { ApiListResponse, QAModel } from "@interfaces/model";
import { QuestionRequest } from "@interfaces/request";
import { QAState } from "@redux/states";
import { RootState } from "@redux/store";
import {
  AnyAction,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { ThunkDispatch } from "redux-thunk";

const initState: QAState = {
  qas: [],
  query: {
    page: 1,
    limit: 8,
    deactivated: false,
  },
  total: 0,
  isOpenModal: false,
  qaDetail: null,
  loading: false,
  error: null,
  success: false,
};

const qaSlice = createSlice({
  initialState: initState,
  name: "qa",
  reducers: {
    loading: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    update_qas: (state, action: PayloadAction<ApiListResponse<QAModel>>) => {
      state.loading = false;
      state.total = action.payload.total;
      state.qas = [...state.qas?.concat(action.payload.items)];
    },
    update_qa_detail: (state, { payload }) => {
      state.loading = false;
      state.qaDetail = payload;
    },
    toggle_modal: (state) => {
      state.isOpenModal = !state.isOpenModal;
    },
    update_query: (state, { payload }) => {
      state.query = payload;
    },
	success: (state) => {
		state.loading = false;
		state.success = true;
		state.error = null;
	},
    error: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    clear: () => initState,
  },
});

export const QaReducer = qaSlice.reducer;

export const { clear, toggle_modal, update_query } = qaSlice.actions;

export function getQAs(tags?: string[], ids?: string[]) {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getStore: () => RootState
  ) => {
    dispatch(qaSlice.actions.loading());
    try {
      const query = { ...getStore().qna.query };
      if (tags) {
        query.tags = tags;
      }
	  if(ids){
		  query.post_ids = ids;
	  }
      const resp = await QaApi.fetchQAs(query);
      if (resp) {
        dispatch(qaSlice.actions.update_qas(resp));
      }
    } catch (error: any) {
      dispatch(qaSlice.actions.error(error.message));
    }
  };
}

export function getQaDetail(id: string) {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getStore: () => RootState
  ) => {
    dispatch(qaSlice.actions.loading());
    try {
      const resp = await QaApi.fetchQaDetail(id);
      if (resp) {
        dispatch(qaSlice.actions.update_qa_detail(resp));
      }
    } catch (error: any) {
      dispatch(qaSlice.actions.error(error.message));
    }
  };
}

export function sendQuestionForm(form: QuestionRequest){
	return async (
		dispatch: ThunkDispatch<{}, {}, AnyAction>,
		getStore: () => RootState
	  ) => {
		dispatch(qaSlice.actions.loading());
		try {
		  const resp = await QaApi.sendQuestion(form);
		  if (resp) {
			dispatch(qaSlice.actions.success());
		  }
		} catch (error: any) {
		  dispatch(qaSlice.actions.error(error.message));
		}
	  };
}
