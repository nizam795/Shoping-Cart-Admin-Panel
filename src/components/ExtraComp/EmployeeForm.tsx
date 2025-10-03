// import React from 'react'

import { useForm } from "react-hook-form";
// import "./style/employeeFrom.css"
import { useDispatch } from "react-redux";
import type { Employee } from "../../types/types";
import { addEmployee } from "../../store/slice/employeeSlice";

const EmployeeForm = () => {
  const {register,handleSubmit,formState: { errors }} = useForm<Employee>()
  const dispatch = useDispatch()

  const handleAdd = (data:Omit<Employee,"id">)=>{
    const newEmployee={
      ...data,
      id:Date.now()
    }
    dispatch(addEmployee(newEmployee))
    // reset()
    console.log("employee data",data)
    alert("data added successfully")
  }
  return (
   <div className="employee-form">
    <h3>Employee Form</h3>
    <form  onSubmit={handleSubmit(handleAdd)}>
      <input
        type="text"
        placeholder="Name"
        {...register("name", { required: "Name is required" })}
      />
      {errors.name && <p className="error">{errors.name.message}</p>}

      <input
        type="email"
        placeholder="Email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            message: "Email is not valid",
          },
        })}
      />
      {errors.email && <p className="error">{errors.email.message}</p>}

      <input
        type="text"
        placeholder="Department"
        {...register("department", { required: "Department is required" })}
      />
      {errors.department && <p className="error">{errors.department.message}</p>}

      <input
        type="text"
        placeholder="Designation"
        {...register("designation", { required: "Designation is required" })}
      />
      {errors.designation && <p className="error">{errors.designation.message}</p>}

      <input
        type="text"
        placeholder="Employee ID"
        {...register("employeeId", { required: "Employee ID is required" })}
      />
      {errors.employeeId && <p className="error">{errors.employeeId.message}</p>}

      <input
        type="date"
        {...register("joiningDate", { required: "Joining Date is required" })}
      />
      {errors.joiningDate && <p className="error">{errors.joiningDate.message}</p>}

      <select {...register("status", { required: "Status is required" })}>
        <option value="">Select Status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      {errors.status && <p className="error">{errors.status.message}</p>}

      <button type="submit">Submit</button>
    </form>
  </div>
  )
}

export default EmployeeForm