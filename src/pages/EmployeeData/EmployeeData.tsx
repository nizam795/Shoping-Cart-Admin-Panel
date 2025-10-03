import SearchBar from "../../components/SearchBar";
import "./employee.css";
import EmployeeTable from "../../components/ExtraComp/EmployeeTable";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { useState } from "react";

const EmployeeData = () => {
  const employeeuser = useSelector(
    (state: RootState) => state.employee.employee
  );
  const [searchItem, setSearchItem] = useState("");

  const filterEmployee = employeeuser.filter(
    (user) =>
      user.name.toLowerCase().includes(searchItem.toLowerCase()) ||
      user.email.toLowerCase().includes(searchItem.toLowerCase())
  );
  return (
    <div className="employee-container">
      <div className="employee-data-header">
        <h2>Employee Data</h2>
        <SearchBar value={searchItem} onChange={setSearchItem} />
      </div>
      <EmployeeTable users={filterEmployee} />
    </div>
  );
};

export default EmployeeData;
