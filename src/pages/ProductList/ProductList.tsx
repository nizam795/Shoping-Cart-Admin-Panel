import "./productlist.css";
import "../../App.css";
import SearchBar from "../../components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store";
import { useEffect, useState } from "react";
import {
  getProducts,
  // setPage,
  setSearchItem,
} from "../../store/slice/productSlice";
import {
  selectedPaginatedProduct,
  // selectTotalPage,
} from "../../components/Selector";
import ProductTable from "../../components/ProductTable";
import Pagination from "../../components/Pagination";
import Breadcrumbs from "../../components/Breadcrumbs";
import { useNavigate } from "react-router-dom";
import { IoChevronDown } from "react-icons/io5";

const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector((state: RootState) => state.product.data);
  const [open, setOpen] = useState<boolean>(false);
  const [selectProduct, setSelectProduct] = useState("10");

  const handleSelect = (value: string) => {
    setSelectProduct(value);
    setOpen(false);
  };

  const selectedProduct = useSelector(selectedPaginatedProduct);
  const searchItem = useSelector(
    (state: RootState) => state.product.searchItem
  );
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // console.log(product);
  const loading = useSelector((state: RootState) => state.product.loading);
  const error = useSelector((state: RootState) => state.product.error);
  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Product not found.</p>;
  return (
    <>
      <Breadcrumbs title="Product List " />
      <div className="product-list bg-white" >
        <button className="add-btn" onClick={() => navigate("/create-product")}>
          Add Product
        </button>
        <div className="flex justify-between items-center my-4">
          <div className="flex gap-2 items-center">
            <span>Display</span>
            <div className="relative inline-block">
              <div
                className=" border-1 border-gray-300 rounded px-2 py-1 flex gap-3 items-center w-15 cursor-pointer"
                onClick={() => setOpen((prev) => !prev)}
              >
                <p>{selectProduct}</p>
                <IoChevronDown className="text-xl" />
              </div>
              {open && (
                <div className="absolute z-10 shadow border-t-0  border-1 border-gray-600 h-auto w-15 transition-normal bg-white  ">
                  <ol className=" space-y-1 text-sm">
                    <li
                      className="cursor-pointer px-2 py-1 hover:text-white hover:bg-blue-500"
                      onClick={() => handleSelect("10")}
                    >
                      10
                    </li>
                    <li
                      className="cursor-pointer px-2 py-1 hover:text-white hover:bg-blue-500"
                      onClick={() => handleSelect("20")}
                    >
                      20
                    </li>
                    <li
                      className="cursor-pointer px-2 py-1 hover:text-white hover:bg-blue-500"
                      onClick={() => handleSelect("All")}
                    >
                      All
                    </li>
                  </ol>
                </div>
              )}
            </div>
            customers
          </div>
          <SearchBar
            value={searchItem}
            onChange={(value) => dispatch(setSearchItem(value))
            }
          />
        </div>
        <ProductTable data={selectedProduct} />
        <Pagination />
      </div>
    </>
  );
};

export default ProductList;
