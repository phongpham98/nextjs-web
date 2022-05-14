import { QuizApi } from "@api";
import { AnswerModel, QuizResponse } from "@interfaces/request";
import { QuizState } from "@redux/states";
import { RootState } from "@redux/store";
import {
	AnyAction,
	createSlice,
	PayloadAction,
  } from "@reduxjs/toolkit";
import { ThunkDispatch } from "redux-thunk";
  
  const initState: QuizState = {
	part: {
	  current_part_number: 1,
	  current_question_number: 1,
	  next_part_number: 2,
	},
	assign_result: [],
	current_part: null,
	process: false,
	user_results: [],
	questions: [],
	loading: false,
	error: null,
	success: false,
  };
  
  const quizSlice = createSlice({
	initialState: initState,
	name: "quiz-test",
	reducers: {
	  loading: (state) => {
		state.loading = false;
		state.error = null;
		state.success = false;
	  },
	  update_question: (state, action: PayloadAction<QuizResponse>) => {
		state.part = action.payload.part;
		state.questions = action.payload.questions;
		state.assign_result = action.payload.assign_result;
		state.user_results = action.payload.user_results;
		state.process = true;
		state.loading = false;
	  },
	  update_current_part: (state, { payload }) => {
		state.current_part = payload;
		state.loading = false;
	  },
	  update_result: (state, action: PayloadAction<QuizResponse>) => {
		state.assign_result = action.payload.assign_result;
		state.user_results = action.payload.user_results;
		state.part = action.payload.part;
		state.process = false;
	  },
	  updateCurrentQuestion: (state, { payload }) => {
		state.part = { ...state.part, current_question_number: payload };
	  },
	  updatePart: (state) => {
		state.part = {
		  ...state.part,
		  current_part_number: state.part.next_part_number,
		  next_part_number: state.part.next_part_number + 1,
		  current_question_number: 1,
		};
	  },
	  clear: () => initState,
	},
  });
  
  export const quizReducer = quizSlice.reducer;
  
  export const { updateCurrentQuestion, updatePart, clear } = quizSlice.actions;
  
  export function getPartQuestion(part_number: number) {
	return async (
	  dispatch: ThunkDispatch<{}, {}, AnyAction>,
	  getStore: () => RootState
	) => {
	  try {
		let questions = [...getStore().quiz.questions];
		let current_part = questions.find((q) => q.part_number === part_number);
		if (current_part)
		  dispatch(quizSlice.actions.update_current_part(current_part));
	  } catch (err) {
	  }
	};
  }
  
  export function getQuiz() {
	return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
	  dispatch(quizSlice.actions.loading());
	  try {
		const resp = await QuizApi.fetchQuestion();
		if (resp) dispatch(quizSlice.actions.update_question(resp));
	  } catch (err) {
	  }
	};
  }
  
  export function getResult(session_id: string) {
	return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
	  dispatch(quizSlice.actions.loading());
	  try {
		const resp = await QuizApi.getResult(session_id);
		if (resp) dispatch(quizSlice.actions.update_question(resp));
	  } catch (err) {
	  }
	};
  }
  
  export function sendAnswer(answer_number: number, question_id: string) {
	return async (
	  dispatch: ThunkDispatch<{}, {}, AnyAction>,
	  getStore: () => RootState
	) => {
	  // dispatch(quizSlice.actions.loading());
	  try {
		const { current_part } = getStore().quiz;
		let question = current_part?.items.find(
		  (q) => q.question_id === question_id
		);
		let answer: AnswerModel = {
		  answer: answer_number,
		  question_number: question ? question.question_number : 0,
		  question_id: question_id,
		  type_id: current_part?.type_id ? current_part.type_id : "",
		};
		const resp = await QuizApi.postAnswer(answer);
		if (resp) {
		  dispatch(quizSlice.actions.update_result(resp));
		}
	  } catch (err) {
	  }
	};
  }
  