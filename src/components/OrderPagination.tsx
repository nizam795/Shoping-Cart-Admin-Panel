import React from 'react'
type Props = {
    currentPage : number;
    totalItems:number;
    itemPerPage : number;
    onPageChange:(page:number)=> void
}
const OrderPagination:React.FC<Props> = ({currentPage,totalItems,itemPerPage,onPageChange}) => {
    const totalPages = Math.ceil(totalItems/itemPerPage)
  return (
    <div className="flex justify-center mt-4 gap-2">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          className={`px-3 py-1 rounded ${
            currentPage === index + 1
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  )
}

export default OrderPagination