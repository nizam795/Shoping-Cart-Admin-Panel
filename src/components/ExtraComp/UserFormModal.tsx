import React, { useEffect } from "react";
// import "./style/userFormModal.css";
import { useForm } from "react-hook-form";
import type { User } from "../../types/types";

type Props = {
  mode: "add" | "edit";
  initialData?: User;
  isOpen: boolean;
  onSubmit: (user: User) => void;
  onClose: () => void;
};
const UserFormModal: React.FC<Props> = ({
  mode,
  initialData,
  isOpen,
  onClose,
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<User>({
    defaultValues: initialData || { name: "", email: "", role: "" },
  });
  useEffect(() => {
    if (initialData) {
      reset(initialData);
    } else {
      reset({ name: "", email: "", role: "" });
    }
  }, [initialData, reset]);

  const handleFormSubmit = (data: User) => {
    onSubmit(data);
    reset();
    onClose();
  };
  if (!isOpen) return null;
  return (
    <>
      <div className="modal-overlay">
        <div className="modal-content">
          <h3>{mode === "add" ? "Add New User" : "Edit User"}</h3>
          <form onSubmit={handleSubmit(handleFormSubmit)} className="user-form">
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Name"
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Email is not valid",
                },
              })}
              placeholder="Email"
            />
            {errors.email && <p className="error">{errors.email.message}</p>}

            <select {...register("role", { required: "Role is required" })}>
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="customer">Customer</option>
            </select>
            {errors.role && <p className="error">{errors.role.message}</p>}

            <div className="form-actions">
              <button type="submit" className="btn">
                {mode === "add" ? "Create" : "Update"}
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserFormModal;
