import React from "react";
import OrderTableRow from "./OrderTableRow";

import type { Order } from "../../../types/types";

type Props = {
  filteredOrders: Order[];
  currenPage: number;
  orderPerPage: number;
};
const OrderTable: React.FC<Props> = ({
  filteredOrders,
  currenPage,
  orderPerPage,
}) => {
  const last = currenPage * orderPerPage;
  const first = last - orderPerPage;
  const currentOrders = filteredOrders.slice(first, last);

  return (
    <div className="overflow-x-auto w-full">
      <table className="user-table min-w-[800px] w-full border border-gray-200 text-left">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Billing Name</th>
            <th>Date</th>
            <th>Payment Status</th>
            <th>Total</th>
            <th>Payment Method</th>
            <th>Order Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {currentOrders.map((order) => (
          <OrderTableRow key={order.orderId} order={order} />
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
