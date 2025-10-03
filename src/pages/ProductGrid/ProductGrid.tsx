import SearchBar from "../../components/SearchBar";

import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store";
import {
  deleteProduct,
  getProducts,
  setPage,
  setSearchItem,
} from "../../store/slice/productSlice";
import {
  selectedPaginatedProduct,
  selectTotalPage,
} from "../../components/Selector";
import type { CreateProductType } from "../../types/types";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import { useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ProductGrid = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const product = useSelector((state: RootState) => state.product.data);
  const searchItem = useSelector(
    (state: RootState) => state.product.searchItem
  );
  const totalPage = useSelector(selectTotalPage);
  const currentPage = useSelector(
    (state: RootState) => state.product.currentPage
  );
  const selectedProduct = useSelector(selectedPaginatedProduct);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // console.log(product);
  const loading = useSelector((state: RootState) => state.product.loading);
  const error = useSelector((state: RootState) => state.product.error);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Product not found.</p>;
  return (
    <>
      <Breadcrumbs title="Product Grid" />
      <div className="mx-5 my-10">
        <div className="flex justify-between items-center my-4 ">
          <button
            className="add-btn"
            onClick={() => navigate("/create-product")}
          >
            Add Product
          </button>
          <SearchBar
            value={searchItem}
            onChange={(value) => dispatch(setSearchItem(value))}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
          {selectedProduct.map((item: CreateProductType) => (
            <div
              className="border border-gray-200 bg-white rounded-lg shadow-sm  w-full max-w-sm relative group cursor-pointer"
              key={item._id}
              onClick={() => navigate(`/productDetials/${item._id}`)}
            >
              <div className="mb-3 inset-0 border-b-1 border-gray-200 p-5 ">
                <img
                  src={item.images[0]}
                  alt=""
                  className="w-full h-40 rounded-md"
                />
                {/* hover content */}
                <div className="absolute top-6 right-5   flex bg-white shadow-md px-3 py-2 gap-3 rounded-2xl items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                  <FaRegEdit className="text-gray-800 text-lg cursor-pointer hover:text-blue-500" />
                  <MdDelete
                    className="text-gray-800 text-lg cursor-pointer hover:text-red-500"
                    onClick={() => {
                      if (item) {
                        dispatch(deleteProduct(item._id));
                      }
                    }}
                  />
                </div>
              </div>
              <div className="space-y-1 p-5">
                <p className="text-lg font-semibold text-gray-800">
                  {item.title}
                </p>
                <p className="text-sm text-yellow-500">★★★★☆</p>
                <p className="text-base font-medium text-gray-600">
                  ${item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <p>showing customers</p>
          <div className="pagination">
            {Array.from({ length: totalPage }, (_, i) => (
              <button
                key={i}
                onClick={() => dispatch(setPage(i + 1))}
                className={currentPage === i + 1 ? "active" : ""}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductGrid;
