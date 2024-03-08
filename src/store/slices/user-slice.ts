import { createSlice } from "@reduxjs/toolkit";

interface skills {
  label: string | null;
  value: string | null;
}

export interface UserState {
  userInfo: {
    company: string | null;
    degree: string | null;
    duration: string | null;
    email: string | null;
    fullName: string | null;
    institution: string | null;
    phone: string | null;
    responsibilities: string | null;
    role: string | null;
    skills: Array<skills>;

    year: string | null;
  };
}

const initialUserState: UserState = {
  userInfo: {
    company: null,
    degree: null,
    duration: null,
    email: null,
    fullName: null,
    institution: null,
    phone: null,
    responsibilities: null,
    role: null,
    skills: [],
    year: null,
  },
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
