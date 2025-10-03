import { useDispatch } from "react-redux";
import UserRow from "./UserRow";
// import "./style/userTable.css";
import type { AppDispatch } from "../../store/store";
import UserFormModal from "./UserFormModal";
import type { User } from "../../types/types";
import { useState } from "react";
import { deleteUser, updateUser } from "../../store/slice/userSlice";

type Props = {
  users: User[];
};
const UserTable: React.FC<Props> = ({ users }) => {
  // const users = useSelector((state: RootState) => state.user.data);

  const dispatch = useDispatch<AppDispatch>();
  const [editUser, setEditUser] = useState<User | null>(null);
  const handleEditSubmit = (updatedUser: User) => {
    console.log("handle Edit", updatedUser);
    dispatch(updateUser(updatedUser));
    setEditUser(null);
  };
  const handleDelete = (userId: number) => {
    dispatch(deleteUser(userId));
  };
  

  return (
    <>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <UserRow
              key={user.id}
              user={user}
              index={index}
              // onEdit={(user) => setEditUser(user)}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
      {editUser && (
        <UserFormModal
          mode="edit"
          isOpen={true}
          initialData={editUser}
          onClose={() => setEditUser(null)}
          onSubmit={handleEditSubmit}
        />
      )}
    </>
  );
};

export default UserTable;
