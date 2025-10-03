import React, { useState } from "react";

import type { CreateProductType, Product } from "../types/types";
import { FaRegStar } from "react-icons/fa";

import { FaPlusCircle, FaMinusCircle, FaEye, FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import { deleteProduct } from "../store/slice/productSlice";
import ProductEdit from "../pages/productEdit/ProductEdit";


type Props = {
  product: Product | CreateProductType;
  index: number;
};

const ProductTableRow: React.FC<Props> = ({ product, index }) => {
  //   const paginatedProduct = useSelector(selectedPaginatedProduct);
  const [isOpen, setIsOpen] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <tr key={index}>
        <td>
          <div className="flex gap-1 items-center">
            <div
              className="w-6 h-6 rounded-full flex justify-center items-center border-1 border-gray-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <span>
                  <FaMinusCircle className="text-red-500" />
                </span>
              ) : (
                <span>
                  <FaPlusCircle className="text-blue-500" />
                </span>
              )}
            </div>
            <input
              type="checkbox"
              name=""
              id=""
              className="w-4 h-4 border-1 "
            />
          </div>
        </td>
        <td className="">
          <div className="flex items-center gap-2">
            <img
              src={product.images[0]}
              alt=""
              className="w-10 h-10 rounded-[4px]"
            />
            <p className="m-0">{product?.title ?? "N/A"}</p>
          </div>
        </td>
        <td>
          <div className="flex gap-1 bg-green-400 m-0 text-m w-fit px-1 py-0 rounded-s items-center">
            <span>
              <FaRegStar size={14} color="white" />
            </span>
            <span className="text-[12px] text-white font-bold">2.4</span>
          </div>
        </td>
        <td>{product.category}</td>
        <td>${product.price}</td>
        <td>Quantity </td>
        <td>active</td>
      </tr>
      {/* Accordion row */}
      {isOpen && (
        <tr className="p-0">
          <td colSpan={8}>
            <div className=" flex flex-col ">
              <p className="text-md font-semibold text-gray-600 ">Action</p>
              <div className="flex gap-3 mt-2">
                <span>
                  <FaEye className="text-gray-400 text-xl" />
                </span>
                <span>
                  <FaRegEdit
                    className="text-gray-400 text-xl"
                    onClick={() => setEditModal(true)}
                  />
                </span>
                <span>
                  <MdDelete
                    className="text-gray-400 text-xl hover:text-red-400"
                    onClick={() => {
                      if (product._id) {
                        dispatch(deleteProduct(product._id));
                      }
                    }}
                  />
                </span>
              </div>
            </div>
          </td>
        </tr>
      )}
      <ProductEdit
        isOpen={editModal}
        onClose={() => setEditModal(false)}
        product={product}
      />
    </>
  );
};

export default ProductTableRow;
