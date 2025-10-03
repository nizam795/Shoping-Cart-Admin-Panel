// import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../store/slice/productSlice";
import { selectTotalPage } from "./Selector";
import type { RootState } from "../store/store";

const Pagination = () => {
  const dispatch = useDispatch();
  const totalPage = useSelector(selectTotalPage);
  const currentPage = useSelector(
    (state: RootState) => state.product.currentPage
  );

  return (
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
  );
};

export default Pagination;
