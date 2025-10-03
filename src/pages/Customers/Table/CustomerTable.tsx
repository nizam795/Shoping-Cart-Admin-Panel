import CustomersRow from "./CustomersRow";
const CustomerTable = () => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="user-table min-w-[800px] w-full border border-gray-200 text-left">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customers</th>
            <th>Email</th>
            <th>Password</th>
            <th>Create Account</th>
            <th>Update Account</th>
            <th>Action</th>
          </tr>
        </thead>
        <thead>
          <CustomersRow />
        </thead>
      </table>
    </div>
  );
};

export default CustomerTable;
