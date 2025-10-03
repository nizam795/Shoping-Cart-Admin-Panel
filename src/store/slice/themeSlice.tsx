import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type themeState = {
  currentTheme: "light" | "dark";
};
const initialState: themeState = {
  currentTheme: "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.currentTheme = state.currentTheme == "dark" ? "light" : "dark";
    },
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.currentTheme = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
