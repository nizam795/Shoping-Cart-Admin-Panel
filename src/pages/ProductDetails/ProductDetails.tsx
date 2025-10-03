import { FaRegEdit } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store";
import { useEffect, useState } from "react";
import { getProductById } from "../../store/slice/productSlice";
import ImageSlide from "../../components/ImageSlide";
import Breadcrumbs from "../../components/Breadcrumbs";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const [mainImage, setMainImage] = useState<string | null>(null);

//   console.log("params id ", id);

 const productId = id || ""
  const product = useSelector((state: RootState) => {
    if (
      state.product.selectedProduct &&
      
      state.product.selectedProduct._id === productId
    ) {
      return state.product.selectedProduct;

    }
    return state.product.data.find((p) => p._id === productId);
  });
  console.log("product details",product)
  useEffect(() => {
    if(!id ) return;

    if (!product || product._id !== productId) {
      dispatch(getProductById(productId));
    }
  }, [dispatch, id, product,productId]);
  useEffect(() => {
    if (product) {
      const firstImage = Array.isArray(product.images)
        ? product.images[0]
        : product.images;
      setMainImage(firstImage);
    }
  }, [product]);
//   console.log(product);
  const loading = useSelector((state: RootState) => state.product.loading);
  const error = useSelector((state: RootState) => state.product.error);

   if (!id ) return <p>Invalid product ID.</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Product not found.</p>;

  //   const addToCart =
  return (
    <>
     <Breadcrumbs title="Product Details" />
      <div className="border-1 border-gray-300 rounded-md h-auto w-auto p-5 flex items-start mx-5 my-10 bg-white">
        <div className="w-1/2 flex flex-col justify-center items-start">
          {mainImage ? (
            <img src={mainImage} alt="" className="w-[70%] h-[70%]"  />
          ) : null}
          <ImageSlide
            onImageSelect={(img) => setMainImage(img)}
            images={product?.images || []}
          />
        </div>
        <div className="w-1/2">
          <p className="text-blue-400 font-semibold">
            {product?.category}
          </p>
          <div className="flex items-center gap-2">
            <p className="text-xl text-black font-semibold">{product?.title}</p>
            <span>
              <FaRegEdit className="text-xl text-gray-400" />
            </span>
          </div>
          <p>rating</p>
          <p className="text-xl text-black font-semibold my-4">
            Price : $ {product?.price}{" "}
          </p>
          <div className="border-b-1 border-b-gray-300"></div>
          <p className="text-gray-500 font-sans my-3 ">
            {product?.description}
          </p>
          <div className="flex items-center my-4 gap-5">
            <div className="flex gap-2 items-center ">
              <p className="text-gray-700 font-medium ">Quantity</p>
              <div className="border-1 border-gray-400 rounded-md px-3 py-1 flex items-center gap-3">
                <p>1</p>
                <FaAngleDown className="" />
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-gray-700 font-medium ">Size</p>
              <div className="border-1 border-gray-400 rounded-md px-3 py-1 flex items-center gap-3">
                <p>medium</p>
                <FaAngleDown className="" />
              </div>
            </div>
          </div>

          <button
            type="button"
            className="bg-blue-400 text-white font-medium text-sm px-4 py-2 rounded-md"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
