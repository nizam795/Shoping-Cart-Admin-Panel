import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

const OrderDetails = () => {
  const { id } = useParams();
  const order = useSelector((state: RootState) =>
    state.order.orders.find((order) => order.orderId === parseInt(id || "", 10))
  );
  console.log("jdsfdsf", order);
  if (!order) return <div className="p-10 text-red-500">Order not found</div>;
  return (
    <>
      <Breadcrumbs title="Order Details" />
      <div className="mx-5 my-8 border-1 border-gray-300 bg-white ">
        <p className="text-gray-600 font-medium px-3 py-3">
          {" "}
          Order #{order.orderId}
        </p>
        <div className="border-b-1 border-b-gray-300"></div>
        <div className="px-3 py-3 ">
          <div className="flex justify-evenly items-center">
            <div className="flex flex-col justify-center items-center">
              <p className="text-gray-400 font-medium">ID No.</p>
              <p className="text-gray-700 text-xl font-medium">
                #{order.orderId}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-gray-400 font-medium">Billing Name</p>
              <p className="text-gray-700 text-xl font-medium">
                {order.billingName}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-gray-400 font-medium">Date</p>
              <p className="text-gray-700 text-xl font-medium">{order.date}</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-gray-400 font-medium">Tracking ID</p>
              <p className="text-gray-700 text-xl font-medium">123456789</p>
            </div>
          </div>
          <p className="font-medium text-gray-700 py-5 ">
            Items from Order #MN2048{" "}
          </p>
          <div>
            <table className="user-table min-w-[800px]  border border-gray-200 text-left">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="flex items-center gap-6">
                      <img
                        src={order.product.image}
                        alt=""
                        className="h-10 w-10 "
                      />
                      <p className="font-medium text-gray-600">
                        {order.product.name}
                      </p>
                    </div>
                  </td>
                  <td>{order.product.quantity}</td>
                  <td>${order.product.price}</td>
                  <td>${order.product.price}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
