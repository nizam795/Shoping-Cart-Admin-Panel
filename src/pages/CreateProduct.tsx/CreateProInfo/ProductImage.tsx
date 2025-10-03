import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {  useFormContext } from "react-hook-form";
import type { CreateProductType } from "../../../types/types";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../store/store";
import { removeImage, uploadImage } from "../../../store/slice/productSlice";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

type Props = {
  setSelectedStep: (index: number) => void;
};
const ProductImage: React.FC<Props> = ({ setSelectedStep }) => {
  const { setValue } = useFormContext<CreateProductType>();

  const dispatch = useDispatch<AppDispatch>();

  const { uploadedImages, loading } = useSelector(
    (state: RootState) => state.product
  );

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ? Array.from(event.target.files) : [];
    files.forEach((file) => {
      dispatch(uploadImage(file));
    });
  };

  useEffect(() => {
    // if (uploadedImages.length > 0) {
    setValue("images", uploadedImages);
    // }
  }, [uploadedImages, setValue]);
  return (
    <div className="p-6 bg-white rounded-2xl shadow-md space-y-5">
      <div>
        <h2 className="text-lg font-semibold text-gray-800">Product Images</h2>
        <p className="text-sm text-gray-500">
          Upload one or more images of your product.
        </p>
      </div>

      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition">
        <CloudUploadIcon className="w-10 h-10 text-gray-400 mb-2" />
        <span className="text-sm text-gray-600">
          Click to upload or drag & drop
        </span>
        <VisuallyHiddenInput
          type="file"
          multiple
          onChange={handleImageChange}
        />
      </label>

      {loading && (
        <div className="text-blue-500 text-sm animate-pulse">Uploading...</div>
      )}

      {uploadedImages.length > 0 && (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {uploadedImages.map((url, i) => (
            <div
              key={i}
              className="relative group border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <img
                src={url}
                alt={`uploaded-${i}`}
                className="w-full h-24 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                <button
                  type="button"
                  className="px-2 py-1 text-xs bg-red-500 text-white rounded"
                  onClick={() => dispatch(removeImage(i))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-end gap-3 pt-4 border-t">
        <button
          type="button"
          className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
          onClick={() => setSelectedStep(0)}
        >
          Back to General
        </button>
        <button
          type="button"
          className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          onClick={() => setSelectedStep(2)}
        >
          Add Meta Data
        </button>
      </div>
    </div>
  );
};

export default ProductImage;
