import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../types";

const isLoggedIn: boolean = false;

const authSlice = createSlice({
  name: "userAuth",
  initialState: { isLoggedIn },
  reducers: {
    setSignIn: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    setSignOut: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
  },
});

export const { setSignIn, setSignOut } = authSlice.actions;
export const selectIsLoggedIn = (state: RootState["auth"]) =>
  state.auth.isLoggedIn;
export default authSlice.reducer;
