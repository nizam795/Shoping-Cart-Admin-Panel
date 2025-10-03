import { Link } from "react-router-dom";
import "./style/sidebar.css";

const SideBar = () => {
  return (
    <div className="w-[240px] absolute sm:fixed  bg-white border-r border-gray-200 p-4 shadow-sm  sm:h-full">
      <ul className="flex flex-col ">
        <Link to="/">
          <li className="font-medium hover:text-blue-600 border-b-1 border-b-gray-200 p-2 hover:bg-blue-100">
            Dashboard
          </li>
        </Link>

        <Link to="/productList">
          {" "}
          <li className="font-medium hover:text-blue-600 border-b-1 border-b-gray-200 p-2 hover:bg-blue-100">
            Product List
          </li>
        </Link>
        <Link to="/product-grid">
          {" "}
          <li className="font-medium hover:text-blue-600 border-b-1 border-b-gray-200 p-2 hover:bg-blue-100">
            Product Grid
          </li>
        </Link>
        <Link to="/create-product">
          {" "}
          <li className="font-medium hover:text-blue-600 border-b-1 border-b-gray-200 p-2 hover:bg-blue-100">
            Create Product
          </li>
        </Link>
        <Link to="/customers">
          {" "}
          <li className="font-medium hover:text-blue-600 border-b-1 border-b-gray-200 p-2 hover:bg-blue-100">
            Customers
          </li>
        </Link>
        <Link to="/orders">
          {" "}
          <li className="font-medium hover:text-blue-600 border-b-1 border-b-gray-200 p-2 hover:bg-blue-100">
            Orders
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
