import { TeamApi } from "@api";
import { ApiListResponse, MemberModel } from "@interfaces/model";
import { FikaTeamState } from "@redux/states";
import { RootState } from "@redux/store";
import {
	AnyAction, createSlice, PayloadAction
} from "@reduxjs/toolkit";
import { ThunkDispatch } from "redux-thunk";

const initState: FikaTeamState = {
  members: [],
  query: {
    page: 1,
    limit: 100,
    deactivated: false,
  },
  loading: false,
  success: false,
  error: null,
  total: 0,
  ceo: null,
  cto: null,
};

const fikaTeamSlice = createSlice({
  initialState: initState,
  name: "fika-team",
  reducers: {
    loading: (state) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    },
    update_members: (
      state,
      action: PayloadAction<ApiListResponse<MemberModel>>
    ) => {
      const cto = action.payload.items.find((item) =>
        item.position?.toLocaleLowerCase().includes("founder")
      );
      const ceo = action.payload.items.find((item) =>
        item.position?.toLocaleLowerCase().includes("founder") && item.id !== cto?.id
      );
      const members = action.payload.items.filter(
        (item) => !item.position.toLocaleLowerCase().includes('founder')
      );
      state.loading = false;
      state.members = members;
      state.total = action.payload.total;
      state.ceo = ceo ? ceo : null;
      state.cto = cto ? cto : null;
    },
    error: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    clear: () => initState,
  },
});

export const fikaTeamReducer = fikaTeamSlice.reducer;

export const { clear } = fikaTeamSlice.actions;

export function getMembers() {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getStore: () => RootState
  ) => {
    dispatch(fikaTeamSlice.actions.loading());
    try {
      const query = { ...getStore().team.query };

      const resp = await TeamApi.fetchMembers(query);
      if (resp) {
        dispatch(fikaTeamSlice.actions.update_members(resp));
      }
    } catch (error: any) {
      dispatch(fikaTeamSlice.actions.error(error.message));
    }
  };
}
