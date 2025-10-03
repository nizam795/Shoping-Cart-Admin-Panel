import React from "react";
import type { Client } from "../../types/types";
type Props = {
  user: Client;
  index: number;
  onDelete: (userId:string | number) => void;
};
const ClientTableRow: React.FC<Props> = ({ user, index, onDelete }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.Company_Name}</td>
      <td>{user.Phone_Number}</td>
      <td>{user.Address}</td>
      <td>{user.Client_Type}</td>
      <td>{user.Status}</td>
      <td>{user.Date}</td>
      <td>
        <button className="delete-btn" onClick={() => onDelete(user.id)}>
          Del
        </button>
      </td>
    </tr>
  );
};

export default ClientTableRow;
