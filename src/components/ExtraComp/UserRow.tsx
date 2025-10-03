import type { User } from "../../types/types";
// import "./style/userTable.css"

type Props = {
  user: User;
  index: number;
  // onEdit: (user: User) => void;
  onDelete: (userId: number) => void;
};
const UserRow: React.FC<Props> = ({ user, index,  onDelete }) => {
  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.role}</td>
        <td>
          {/* <button className="edit-btn" onClick={() => onEdit(user)}>Edit</button> */}
          <button className="delete-btn" onClick={() => onDelete(user.id)}>Delete</button>
        </td>
      </tr>
    </>
  );
};

export default UserRow;
