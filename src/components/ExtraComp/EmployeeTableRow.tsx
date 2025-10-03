import React from "react";

import type { Employee } from "../../types/types";
type Props = {
  user: Employee;
  index:number;
  onDelete:(userId:number)=>void
};
const EmployeeTableRow: React.FC<Props> = ({ user, index ,onDelete}) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.department}</td>
      <td>{user.designation}</td>
      <td>{user.employeeId}</td>
      <td>{user.joiningDate}</td>
      <td>{user.status}</td>
      <td>
        <button className="delete-btn"
         onClick={()=>onDelete(user.id)}
         >Del</button>
      </td>
    </tr>
  );
};

export default EmployeeTableRow;
