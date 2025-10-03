import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import authReducer from "./slice/authSlice";
import employeeReducer from "./slice/employeeSlice"
import clientReducer from "./slice/clientSlice"
import productSlice from "./slice/productSlice"
import orderReducer from "./slice/orderSlice"
import themeReducer from "./slice/themeSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth:authReducer,
    employee:employeeReducer,
    client:clientReducer,
    product: productSlice,
    order : orderReducer,
    theme: themeReducer
  }, 
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
