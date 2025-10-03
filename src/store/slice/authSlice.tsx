import { createSlice } from "@reduxjs/toolkit";

type User = {
  name: string;
  email: string;
  password: string;
};

const userFromStorage = localStorage.getItem("user");

const initialState: {
  user: User | null;
  isLoggedIn: boolean;
} = {
  user: userFromStorage ? JSON.parse(userFromStorage) : null,
  isLoggedIn: !!userFromStorage,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.user = action.payload;
    //    state.isLoggedIn = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logIn: (state, action) => {
      const storeUser = localStorage.getItem("user");
      if (storeUser) {
        const user = JSON.parse(storeUser);
        if (
          user.email === action.payload.email &&
          user.password === action.payload.password
        ) {
          state.user = user;
          state.isLoggedIn = true;
        }
      }
    },
    logOut: (state) => {
      state.user = null;
      state.isLoggedIn = false;
       localStorage.removeItem("user");
    },
  },
});

export const { signUp, logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
