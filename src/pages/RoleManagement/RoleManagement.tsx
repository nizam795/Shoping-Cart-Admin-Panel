import React, { useState } from "react";
import "./role.css";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { addUser } from "../../store/slice/userSlice";
import { useForm } from "react-hook-form";
import type { User } from "../../types/types";
import { useNavigate } from "react-router-dom";

const RoleManagement = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<User>();
  const onSubmit = (data: User) => {
    if(!selectedRole){
      alert("please select role")
    }
    const newUser = {
      id: Date.now(), 
      name: data.name,
      email: data.email,
      role: selectedRole,
    };
    dispatch(addUser(newUser));
    reset();
    setSelectedRole("");

    if (selectedRole === "employee") {
      navigate("/employee-form");
    } else if (selectedRole === "client") {
      navigate("/client-form");
    }
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(e.target.value);
    setFormSubmitted(false);
  };

  return (
    <>
      <div className="role-management">
        <h2>Role Management</h2>
        <label htmlFor="">Select your Role</label>
        <select onChange={handleRoleChange} value={selectedRole}>
          <option value="">-- Choose Role --</option>
          <option value="employee">Employee</option>
          <option value="client">Client</option>
        </select>
        {(selectedRole === "employee" || selectedRole === "client") &&
          !formSubmitted && (
            <div className="employee-form">
              <h3>{selectedRole === "employee" ? "Employee" : "Client"} </h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p className="error">{errors.name.message}</p>}
                <input
                  type="text"
                  placeholder="Email"
                  {...register("email", {
                    required: "email is required",
                    pattern: {
                      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                      message: "Email is not valid",
                    },
                  })}
                />
                {errors.email && (
                  <p className="error">{errors.email.message}</p>
                )}

                <button type="submit">Submit</button>
              </form>
            </div>
          )}
      </div>
    </>
  );
};

export default RoleManagement;
