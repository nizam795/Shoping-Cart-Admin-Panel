import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import EditGeneralInfo from "./EditProInfo/EditGeneralInfo";
import EditMetaInfo from "./EditProInfo/EditMetaInfo";
import EditImage from "./EditProInfo/EditImage";
import type { CreateProductType } from "../../types/types";
import { updateProduct } from "../../store/slice/productSlice";
import type { AppDispatch } from "../../store/store";

const steps = [
  { number: "01", label: "General" },
  { number: "02", label: "Product Image" },
  { number: "03", label: "Meta Data" },
];

type Props = {
  isOpen: boolean;
  onClose: () => void;
  product?: CreateProductType;
};

const ProductEdit: React.FC<Props> = ({ isOpen, onClose, product }) => {
  const [selectedStep, setSelectedStep] = useState<number>(0);
  const methods = useForm<CreateProductType>({
    defaultValues: {
      title: product?.title || "",
      reference: product?.reference || "",
      description: product?.description || "",
      productSummery: product?.productSummery || "",
      category: product?.category || "",
      status: product?.status || "draft",
      comment: product?.comment || "",
      images: product?.images || [],
      metaTitle: product?.metaTitle || "",
      metaKeywords: product?.metaKeywords || "",
      metaDesc: product?.metaDesc || "",
      price: product?.price || 0,
      rating: product?.rating || { rate: 0, count: 0 },
    },
  });

  const dispatch = useDispatch<AppDispatch>();

  const handleEditSubmit = (data: Partial<CreateProductType>) => {
    console.log("Final Product data", data);
    if (!product?._id) return;

    dispatch(updateProduct({ id: product?._id, updatedProduct: data }))
      .unwrap()
      .then(() => {
        alert("Product updated successfully ✅");
        onClose();
      })
      .catch((error: any) => {
        console.error("Update failed:", error);
        alert("Failed to update product ❌");
      });

    
  };
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-40 z-50 "
      onClick={onClose}
    >
      <div
        className="bg-gray-100 p-6 rounded-lg w-[70%] shadow-lg relative h-[420px] top-[20px] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✖
        </button>

        <h2 className="text-lg font-semibold mb-4">Edit Product</h2>

        {/* Example: Pre-fill values */}

        <div className="flex justify-between gap-4 w-full mb-6">
          {steps.map((item, index) => (
            <div
              className={`flex items-center border border-blue-400 rounded-md px-4 py-1 bg-blue-200 w-full gap-2 cursor-pointer
                ${
                  selectedStep === index
                    ? "bg-blue-500 text-white"
                    : "bg-blue-200 text-gray-700"
                }
                `}
              key={index}
              onClick={() => setSelectedStep(index)}
            >
              <div className="w-[36px] h-[36px] rounded-full bg-blue-300 p-1 flex items-center justify-center">
                <p className={`text-blue-500 text-md font-medium`}>
                  {item.number}
                </p>
              </div>
              <p
                className={`font-medium ${
                  selectedStep === index ? "text-white" : "text-gray-700"
                }`}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleEditSubmit)}>
            {selectedStep === 0 && (
              <EditGeneralInfo setSelectedStep={setSelectedStep} />
            )}
            {selectedStep === 1 && (
              <EditImage setSelectedStep={setSelectedStep} />
            )}
            {selectedStep === 2 && (
              <EditMetaInfo setSelectedStep={setSelectedStep} />
            )}
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default ProductEdit;
