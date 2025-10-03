import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Employee } from "../../types/types";

const storedEmployee = localStorage.getItem("employeeData");
const initialState: { employee: Employee[] } = {
  employee: storedEmployee ? JSON.parse(storedEmployee) : [],
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.employee.push(action.payload);
      localStorage.setItem("employeeData", JSON.stringify(state.employee));
    },
    deleteEmployee: (state, action: PayloadAction<number>) => {
      state.employee = state.employee.filter(
        (emp) => emp.id !== action.payload
      );
      localStorage.setItem("employeeData", JSON.stringify(state.employee));
    },
  },
});
export const { addEmployee, deleteEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
