import React from 'react'
import SearchBar from '../../components/SearchBar';
import ClientTable from '../../components/ExtraComp/ClientTable';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';

const ClientData = () => {
  const clientUser = useSelector((state:RootState)=>state.client.client)
  return (
    <div className="employee-container">
      <div className="employee-data-header">
        <h2>Client Data</h2>
        <SearchBar
          value={""}
          onChange={function (value: string): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
      <ClientTable users={clientUser} />
      </div>
  )
}

export default ClientData