import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "userAuth",
  initialState: {
    isLoggedIn: false,
  },
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

export const selectIsLoggedIn = (state: { userAuth: { isLoggedIn: any } }) =>
  state.userAuth.isLoggedIn;

export default authSlice.reducer;
