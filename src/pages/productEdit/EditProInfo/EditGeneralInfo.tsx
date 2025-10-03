import React from 'react'
import { useForm, useFormContext } from "react-hook-form";
import type { CreateProductType } from '../../../types/types';


type Props = {
  setSelectedStep: (index: number) => void;
};
const EditGeneralInfo:React.FC<Props> = ({setSelectedStep}) => {
    const {
        register,
       
        formState: { errors },
      } = useFormContext<CreateProductType>();
  return (
     <div className=" mt-5">
      <div className="my-3">
        <p className="text-md font-medium">General Information</p>
        <p className="text-sm text-gray-400">Fill all information below</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  mt-5 gap-5 w-full">
        <div className="flex flex-col gap-2 ">
          <p className="text-sm font-medium text-gray-800">Product Name</p>
          <input
            type="text"
            placeholder="Enter product Name"
            {...register("title", {
              required: "Product name is required",
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )} 
        </div>
        <div className="flex flex-col gap-2 ">
          <p className="text-sm font-medium text-gray-800">Reference </p>
          <input
            type="text"
            placeholder="reference"
            {...register("reference")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <p className="text-sm font-medium text-gray-800">
            Product Description{" "}
          </p>
          <textarea
            id=""
            rows={2}
            {...register("description")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <div className="flex flex-col gap-2 ">
          <p className="text-sm font-medium text-gray-800">Product Summary</p>
          <textarea
            rows={2}
            {...register("productSummery")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <div className="flex flex-col gap-2 ">
          <p className="text-sm font-medium text-gray-800">Categories</p>
          <select
            id=""
            aria-placeholder="select"
            {...register("category", { required: "Please select a category" })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select</option>
            <option value="Electronics">Electronics</option>
            <option value="Grocery">Grocery</option>
            <option value="Clothes">Clothes</option>
          </select>
          {errors.category && (
            <p className="text-red-500 text-sm">{errors.category.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2 ">
          <p className="text-sm font-medium text-gray-800">Categories</p>
          <div className="flex gap-3 items-center">
            <label htmlFor="" className="flex gap-1">
              <input type="radio" value="online"
               {...register("status")} 
               />{" "}
              Online
            </label>
            <label htmlFor="" className="flex gap-1">
              <input type="radio" value="offline" 
              {...register("status")} 
              />{" "}
              Offline
            </label>
            <label htmlFor="" className="flex gap-1">
              <input type="radio" value="draft" 
              {...register("status")} 
              /> Draft
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-2 ">
          <p className="text-sm font-medium text-gray-800">Price</p>
          <input
            type="number"
            placeholder="Enter Price"
            {...register("price", {
              required: "Product name is required",
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2 ">
          <p className="text-sm font-medium text-gray-800">Comment</p>
          <textarea
            rows={2}
            placeholder="please Enter a comment"
            {...register("comment")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
      </div>
      <div className="flex justify-end mt-3">
        <button
        type="button"
          className="bg-blue-400 px-3 py-2 rounded-md "
         onClick={() => setSelectedStep(1)}
        >
          Add More Info
        </button>
      </div>
    </div>
  )
}

export default EditGeneralInfo