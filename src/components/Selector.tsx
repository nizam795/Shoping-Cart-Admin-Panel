import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

const selectProductData = (state: RootState) => state.product.data;
const selectCurrentPage = (state: RootState) => state.product.currentPage;
const selectItemPerPage = (state: RootState) => state.product.itemPerPage;
const selectSearchItem = (state: RootState) => state.product.searchItem;

export const selectfilterProduct = createSelector(
  [selectProductData, selectSearchItem],
  (data, searchItem) => {
    if (!searchItem) return data;
    return data.filter(
      (item) =>{
        const title = item.title?.toLowerCase() ?? "";
        const category = item.category?.toLowerCase() ?? "";
        const search = searchItem.toLowerCase();
        return title.includes(search) || category.includes(search)

      }
    );
  }
);

export const selectedPaginatedProduct = createSelector(
  [selectfilterProduct, selectCurrentPage, selectItemPerPage],
  (filtered, currentPage, itemPerPage) => {
    const start = (currentPage - 1) * itemPerPage;
    const end = start + itemPerPage;
    return filtered.slice(start, end);
  }
);


export const selectTotalPage = createSelector(
  [selectfilterProduct, selectItemPerPage],
  (filtered, itemPerPage) => {
    return Math.ceil(filtered.length / itemPerPage);
  }
);


// const sele?  tSearchItem1 = (state: RootState) => state.user.searchItem;