import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import type { Order } from "../../../types/types";
import { Link, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import type { RootState } from "../../../store/store";

type Props = {
  order: Order;
};

const OrderTableRow: React.FC<Props> = ({ order }) => {
  // const ord = useSelector((state:RootState)=>state.order.orders)
  // console.log("order",ord)
  const navigate = useNavigate();
  const handleRowClick = (orderId: number) => {
    navigate(`/orders/${orderId}`);
  };
  return (
    <>
      <tr>
        <td
          className="text-blue-500 hover:text-blue-900 cursor-pointer font-medium"
          onClick={() => handleRowClick(order.orderId)}
        >
          {order.orderId}
        </td>

        <td className="">{order.billingName}</td>
        <td>{order.date}</td>
        <td>{order.paymentStatus}</td>
        <td>{order.total}</td>
        <td>{order.paymentMethod}</td>
        <td>{order.orderStatus}</td>
        <td>
          <div className="flex gap-3">
            <FaEdit />
            <MdDelete />
          </div>
        </td>
      </tr>
    </>
  );
};

export default OrderTableRow;
