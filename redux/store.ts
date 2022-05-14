import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { persistReducer, persistStore } from "redux-persist";
import logger from "redux-logger";
import thunk from "redux-thunk";
//   import storage from '@app/config'
import { homeReducer } from "./slices/home";
import { authReducer } from "./slices/authSlice";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import thunkMiddleware from "redux-thunk";
import { matchedReducer } from "./slices/matched";
import { discoverReducer } from "./slices/discoverBlogs";
import { instagramReducer } from "./slices/instagram";
import { pressFikaReducer } from "./slices/press";
import { searchReducer } from "./slices/search";
import { quizReducer } from "./slices/quiz";
const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const rootReducer = combineReducers({
  home: homeReducer,
  auth: authReducer,
  matched: matchedReducer,
  discover: discoverReducer,
  instagram: instagramReducer,
  press: pressFikaReducer,
  search: searchReducer,
  quiz: quizReducer,
});

const persistedReducer = persistReducer(
  {
    key: "hackathon-website",
    storage: storage,
    whitelist: ["auth"],
  },
  rootReducer
);

export const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: [thunkMiddleware],
    devTools: process.env.NODE_ENV === "development",
  });

export const persistor = persistStore(makeStore());

export type RootStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<RootStore["getState"]>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;

export type AsyncThunkConfig = {
  state: RootState;
  rejectValue: string;
};

export const wrapper = createWrapper<RootStore>(makeStore);
