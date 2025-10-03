import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Client } from "../../types/types";

const storedClient = localStorage.getItem("clientData");
const initialState: { client: Client[] } = {
  client: storedClient ? JSON.parse(storedClient) : [],
};

const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    addClient: (state, action: PayloadAction<Client>) => {
      state.client.push(action.payload);
      localStorage.setItem("clientData", JSON.stringify(state.client));
    },
    deleteClient: (state, action: PayloadAction<number>) => {
      state.client = state.client.filter(
        (emp) => emp.id !== action.payload
      );
      localStorage.setItem("clientData", JSON.stringify(state.client));
    },
  },
});
export const { addClient, deleteClient } = clientSlice.actions;
export default clientSlice.reducer;
