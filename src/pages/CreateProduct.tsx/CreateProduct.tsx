import { useState } from "react";
import GeneralInfo from "./CreateProInfo/GeneralInfo";
import MetaData from "./CreateProInfo/MetaData";
import ProductImage from "./CreateProInfo/ProductImage";
import Breadcrumbs from "../../components/Breadcrumbs";
import type { CreateProductType } from "../../types/types";
import {FormProvider, useForm} from "react-hook-form"
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { createProduct } from "../../store/slice/productSlice";

const steps = [
  { number: "01", label: "General" },
  { number: "02", label: "Product Image" },
  { number: "03", label: "Meta Data" },
];
const CreateProduct = () => {
  const [selectedStep, setSelectedStep] = useState<number>(0);
  const dispatch = useDispatch<AppDispatch>()
  const methods = useForm<CreateProductType>({
    defaultValues:{
      title:"",
      reference:"",
      description:"",
      productSummery: "",
      category: "",
      status: "draft",
      comment: "",
      images: [],
      metaTitle: "",
      metaKeywords: "",
      metaDesc: "",
      price:0,
      rating: {
      rate: 0,
      count: 0,
    },    
    }
  })
  const onSubmit = (data:CreateProductType)=>{
    console.log("Final Product data",data)
    dispatch(createProduct(data))
    alert("product upload successfully")
  }
  return (
    <>
      <Breadcrumbs title="Create Product" />
      <div className="border-1 border-gray-300 rounded-md h-auto w-auto p-5 mx-5 my-10  bg-white ">
        <div className="flex justify-between gap-4 w-full">
          {steps.map((item, index) => (
            <div
              className={`flex items-center border-1 border-blue-400 rounded-md px-4 py-1 bg-blue-200 w-full gap-2 cursor-pointer
                ${selectedStep === index ? "bg-blue-500" : "bg-blue-200"}
                `}
              key={index}
              onClick={() => setSelectedStep(index)}
            >
              <div className="w-[36px] h-[36px] rounded-[50%] bg-blue-300 p-1 flex items-center justify-center">
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
          <form onSubmit={methods.handleSubmit(onSubmit)}>
        {selectedStep === 0 && (
          <GeneralInfo setSelectedStep={setSelectedStep} />
        )}
        {selectedStep === 1 && (
          <ProductImage setSelectedStep={setSelectedStep} />
        )}
        {selectedStep === 2 && <MetaData setSelectedStep={setSelectedStep} />}
        </form>
        </FormProvider>
      </div>
    </>
  );
};
export default CreateProduct



