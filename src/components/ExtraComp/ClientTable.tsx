import React from 'react'
import ClientTableRow from './ClientTableRow'
import type { Client } from '../../types/types';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../store/store';
import { deleteClient } from '../../store/slice/clientSlice';

type Props = {
  users: Client[];
};
const ClientTable:React.FC<Props> = ({users}) => {
    const dispatch = useDispatch<AppDispatch>();

  const handleDelete = (id: string | number) => {
    dispatch(deleteClient(Number(id)));
    console.log(id)
  };
  return (
   <table className="user-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Company Name</th>
          <th>Phone Number</th>
          <th>Address</th>
          <th>Select Client Type</th>
          <th>Status</th>
          <th>Date</th>
          <th>Action</th>

        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <ClientTableRow
            key={user.id}
            user={user}
            index={index}
            onDelete={handleDelete}
          />
        ))}
      </tbody>
    </table>
  )
}

export default ClientTable