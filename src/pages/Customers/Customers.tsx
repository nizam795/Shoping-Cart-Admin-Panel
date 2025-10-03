import Breadcrumbs from "../../components/Breadcrumbs";
import { IoChevronDown } from "react-icons/io5";
import SearchBar from "../../components/SearchBar";
import CustomerTable from "./Table/CustomerTable";
import Pagination from "../../components/Pagination";

const Customers = () => {
  return (
    <>
      <Breadcrumbs title="Customers" />
      <div className="mx-5 my-10 border-1 border-gray-300 rounded-xl px-4 py-8 bg-white">
        <div className="flex justify-end items-center gap-3">
          <button className="bg-gray-300 px-3 py-1.5 rounded-md flex justify-center items-center">
            Import
          </button>
          <button className="bg-gray-300 px-3 py-1.5 rounded-md flex justify-center items-center">
            Export
          </button>
        </div>
        <div className="flex justify-between items-center my-5">
          <div className="flex gap-2 items-center">
            <p className="text-sm text-gray-500">Display</p>
            <div className="border-1 border-gray-200 rounded flex gap-3 items-center px-3 py-1  ">
              <p>1</p>
              <IoChevronDown />
            </div>
            <p className="text-sm text-gray-500">Customers</p>
          </div>
          <SearchBar
            value={""}
            onChange={function (value: string): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
        <CustomerTable />
        <Pagination />
      </div>
    </>
  );
};

export default Customers;
