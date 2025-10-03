import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Order } from "../../types/types";

type OrderState = {
  orders: Order[];
  searchTerm: string;
  currentPage: number;
  ordersPerPage: number;
};

const storedOrders = localStorage.getItem("orders");
const initialState: OrderState = {
  orders: storedOrders ? JSON.parse(storedOrders) : [],
  searchTerm: "",
  currentPage: 1,
  ordersPerPage: 8,
};
const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrders: (state, action: PayloadAction<Order[]>) => {
      state.orders = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
      
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    // deleteClient: (state, action: PayloadAction<number>) => {
    //   state.client = state.client.filter(
    //     (emp) => emp.id !== action.payload
    //   );
    //   localStorage.setItem("clientData", JSON.stringify(state.client));
    // },
  },
});
export const { setOrders, setSearchTerm, setCurrentPage } = orderSlice.actions;
export default orderSlice.reducer;
