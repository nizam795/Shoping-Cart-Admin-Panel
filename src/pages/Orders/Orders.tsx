import { useDispatch, useSelector } from "react-redux";
import Breadcrumbs from "../../components/Breadcrumbs";
import SearchBar from "../../components/SearchBar";
import { IoChevronDown } from "react-icons/io5";
import OrderTable from "./Table/OrderTable";
import type { RootState } from "../../store/store";
import orderData from "../../data/order.json"

import OrderPagination from "../../components/OrderPagination";
import { setCurrentPage, setOrders, setSearchTerm } from "../../store/slice/orderSlice";
import { useEffect } from "react";

const Orders = () => {
  const dispatch = useDispatch();
  const { orders, currentPage, ordersPerPage, searchTerm } = useSelector(
    (state: RootState) => state.order
  );

  const filterOrders = orders.filter((order) =>
    order.billingName?.toLowerCase().includes(searchTerm?.toLowerCase() || "")
  );
   useEffect(() => {
    dispatch(setOrders(orderData));
    localStorage.setItem("orders", JSON.stringify(orderData));
  }, [dispatch]);
  return (
    <>
      <Breadcrumbs title="Orders" />
      <div className="mx-5 my-10 border-1 border-gray-300 rounded-xl px-4 py-8 bg-white">
        <div className="flex justify-between items-center my-5">
          <div className="flex gap-4 items-center justify-center">
            <SearchBar
              value={searchTerm}
              onChange={(value: string) => {
                dispatch(setSearchTerm(value));
              }}
            />
            <div className="flex gap-2 items-center">
              <p className="text-sm text-gray-500">Status</p>
              <div className="border-1 border-gray-200 rounded flex gap-3 justify-between items-center px-3 py-1 w-40    ">
                <p>1</p>
                <IoChevronDown />
              </div>
            </div>
          </div>
          <button className="bg-gray-300 px-3 py-1.5 rounded-md flex justify-center items-center">
            Export
          </button>
        </div>

        <OrderTable
          filteredOrders={filterOrders}
          currenPage={currentPage}
          orderPerPage={ordersPerPage}
        />
        <OrderPagination
          currentPage={currentPage}
          totalItems={filterOrders.length}
          itemPerPage={ordersPerPage}
          onPageChange={(page) => dispatch(setCurrentPage(page))}
        />
      </div>
    </>
  );
};

export default Orders;
