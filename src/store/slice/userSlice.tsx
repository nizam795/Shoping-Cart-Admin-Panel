import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import type { User } from "../../types/types";

type UsersState = {
  data: User[];
  loading: boolean;
  error: string | null;
   currentPage: number;
  itemPerPage: number;
  searchItem: string;

};
const initialState: UsersState = {
  data: [],
  loading: false,
  error: null,
  currentPage:1,
  itemPerPage:8,
  searchItem:""
};

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  try {
    const res = await axios.get(
      "https://api.escuelajs.co/api/v1/users?limit=10"
    );
    console.log(res);
    return res.data;
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch products");
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.data.push(action.payload);
      
    },
     setSearchItem: (state, action: PayloadAction<string>) => {
      state.searchItem = action.payload;
      state.currentPage = 1;
    },
    updateUser: (state, action) => {
      const index = state.data.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },
    deleteUser: (state, action) => {
      state.data = state.data.filter((user) => user.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});
export default userSlice.reducer;
export const { addUser, updateUser, deleteUser } = userSlice.actions;
