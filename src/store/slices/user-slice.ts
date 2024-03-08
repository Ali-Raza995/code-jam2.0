import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  userInfo: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    catchError: (state: any, action: any) => {
      state.error = `${action.type}: ${action.payload.error}`;
      state.actionsLoading = false;
    },
    getUserData: (state, action) => {
      console.log("payload", action.payload);
      state.userInfo = action.payload;
    },
  },
});

export const { getUserData } = userSlice.actions;
