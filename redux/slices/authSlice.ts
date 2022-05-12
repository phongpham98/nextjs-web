import { RootState } from "@redux/store";
import {
  AnyAction,
  createSlice,
  Dispatch,
} from "@reduxjs/toolkit";
import Router from "next/router";
import { ThunkDispatch } from "redux-thunk";

export interface AuthState {
  loading?: boolean;
  signedIn?: boolean;
  error?: string | null;
}

const initialState: AuthState = {
  loading: false,
  signedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    loading: (state) => {
      state.loading = true;
      state.error = null;
    },
    login: (state) => {
      state.signedIn = true;
      state.error = null;
    },
    logout: (state) => {
      Router.push("/auth/login");
      state.loading = false;
      state.signedIn = false;
      state.error = null;
    },
    update_current_user: (state, { payload }) => {
      state.signedIn = true;
      state.loading = false;
    },
    error: (state, { payload }) => {
      state.error = payload;
      state.signedIn = false;
      state.loading = false;
    },
    clear: () => initialState,
  },
});

export const authReducer = authSlice.reducer;

export const { logout, clear, login } = authSlice.actions;
type Dispatcher = ThunkDispatch<RootState, undefined, AnyAction>;
type GetState = () => RootState;

// return async(dispatch: Dispatcher , getState: GetState)
export function getCurrentUser() {
  return async (dispatch: Dispatcher, getState: GetState) => {
    try {
      //   const res = await userApi.getCurrentUser()
      //   if (res) {
      //     dispatch(authSlice.actions.update_current_user(res))
      //   }
    } catch (error: any) {
      //   notification.error({ message: error.detail })
      dispatch(authSlice.actions.clear());
    }
  };
}
