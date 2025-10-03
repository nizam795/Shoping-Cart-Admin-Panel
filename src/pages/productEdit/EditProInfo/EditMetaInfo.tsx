import React from 'react'
import { useFormContext } from 'react-hook-form';
import type { CreateProductType } from '../../../types/types';


type Props = {
  setSelectedStep: (index: number) => void;
};
const EditMetaInfo:React.FC<Props> = ({setSelectedStep}) => {
    const { register } = useFormContext<CreateProductType>();
  return (
    <div className=" mt-5">
      <div className="my-3">
        <p className="text-md font-medium">Meta Data</p>
        <p className="text-sm text-gray-400">Fill all information below</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  mt-5 gap-5 w-full">
        <div className="flex flex-col gap-2 ">
          <p className="text-sm font-medium text-gray-800">Meta title</p>
          <input
            type="text"
            placeholder="Enter title"
            {...register("metaTitle", {})}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <p className="text-sm font-medium text-gray-800">Meta Keywords</p>
          <input
            type="text"
            placeholder="Enter keyword"
            {...register("metaKeywords")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <p className="text-sm font-medium text-gray-800">Meta Description</p>
          <textarea
           
            rows={2}
            placeholder="Enter dexcription"
            {...register("metaDesc")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
      </div>
      <div className="flex justify-end mt-5 gap-3">
        <button
        type="button"
          className="bg-gray-400 px-3 py-2 rounded-md"
          onClick={() => setSelectedStep(1)}
        >
          Edit Information
        </button>
        <button type="submit" className="bg-blue-400 px-3 py-2 rounded-md">
          Publish Product
        </button>
      </div>
    </div>
  )
}

export default EditMetaInfo