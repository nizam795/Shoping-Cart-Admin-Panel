import React from "react";
// import "./style/userTable.css";
import EmployeeTableRow from "./EmployeeTableRow";
import type { Employee } from "../../types/types";
import { useDispatch } from "react-redux";
import { deleteEmployee } from "../../store/slice/employeeSlice";
import type { AppDispatch } from "../../store/store";

type Props = {
  users: Employee[];
};
const EmployeeTable: React.FC<Props> = ({ users }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = (id: string | number) => {
    dispatch(deleteEmployee(Number(id)));
    console.log(id)
  };
  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Desination</th>
          <th>Employee Id</th>
          <th>Date</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <EmployeeTableRow
            key={user.id}
            user={user}
            index={index}
            onDelete={handleDelete}
          />
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
