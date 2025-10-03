import React from "react";
// import { selectedPaginatedProduct } from "./Selector";
// import { useDispatch, useSelector } from "react-redux";
import "./style/userTable.css"

import type { CreateProductType, Product } from "../types/types";
import ProductTableRow from "./ProductTableRow";


type Props = {
    data:(Product | CreateProductType)[]
}
const ProductTable:React.FC<Props> = ({data}) => {

  return (
    <div>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Rating</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Status</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map((product, index) => (
            <ProductTableRow key={product._id} index={index} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
