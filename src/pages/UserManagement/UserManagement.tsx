// import React from 'react'
import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import UserFormModal from "../../components/ExtraComp/UserFormModal";
import UserTable from "../../components/ExtraComp/UserTable";
import "./UserManagement.css";
import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../../store/store";
import { addUser, fetchUsers } from "../../store/slice/userSlice";
import type { User } from "../../types/types";

const UserManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.user.data);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const handleAddUser = (newUser: User) => {
    dispatch(addUser(newUser));

    console.log("User added:");
    // Save to Redux or API
  };

  // 🔍 Filtered user list
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <div className="user-Container">
        <div className="user-management-container">
          <h2>User Management</h2>
          <div className="user-management-header">
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
            {/* <button
              type="button"
              className="btn"
              onClick={() => setIsModalOpen(true)}
            >
              Add User
            </button> */}
          </div>
        </div>
        <UserTable users={filteredUsers} />
      </div>
      <UserFormModal
        mode="add"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddUser}
      />
    </>
  );
};

export default UserManagement;
