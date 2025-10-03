import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { CreateProductType } from "../../types/types";
import axios from "axios";

type ProductState = {
  data: CreateProductType[];
  uploadedImages: string[];
  selectedProduct: CreateProductType | null;
  loading: boolean;
  error: string | null;
  currentPage: number;
  itemPerPage: number;
  searchItem: string;
};
const initialState: ProductState = {
  data: [],
  uploadedImages: [],
  selectedProduct: null,
  loading: false,
  error: null,
  currentPage: 1,
  itemPerPage: 8,
  searchItem: "",
};
const API_URL = "http://localhost:4000/product";
export const getProducts = createAsyncThunk<CreateProductType[]>(
  "products/fetch",
  async () => {
    try {
      const res = await axios.get(`${API_URL}/all`);
      console.log(res);
      return res.data;
    } catch (error: any) {
      throw new Error(error.message || "Failed to fetch products");
    }
  }
);
export const getProductById = createAsyncThunk<
  CreateProductType,
  string,
  { rejectValue: string }
>("product/fetchedById", async (id, { rejectWithValue }) => {
  try {
    const res = await axios.get(`${API_URL}/${id}`);
    console.log("res data",res.data)
    return res.data;
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data?.message ||
        error.message ||
        "Failed to fetch product"
    );
  }
});
//create product
export const createProduct = createAsyncThunk<
  CreateProductType,
  Partial<CreateProductType>,
  { rejectValue: string }
>("product/create", async (newProduct, { rejectWithValue }) => {
  try {
    const res = await axios.post(`${API_URL}/create`, newProduct);
    console.log("createdata", res);
    return res.data;
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data?.message ||
        error.message ||
        "Failed to create product"
    );
  }
});

// update product
export const updateProduct = createAsyncThunk<
  CreateProductType,
  { id: string; updatedProduct: Partial<CreateProductType> },
  { rejectValue: string }
>("product/update", async ({ id, updatedProduct }, { rejectWithValue }) => {
  try {
    const res = await axios.put(`${API_URL}/update/${id}`, updatedProduct);
    return res.data;
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data?.message ||
        error.message ||
        "Failed to update product"
    );
  }
});
export const deleteProduct = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>("product/delete", async (id, { rejectWithValue }) => {
  try {
    await axios.delete(`${API_URL}/delete/${id}`);
    return id;
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data?.message ||
        error.message ||
        "Failed to delete product"
    );
  }
});

export const uploadImage = createAsyncThunk<
  string,
  File,
  { rejectValue: string }
>("product/uploadImage", async (file, { rejectWithValue }) => {
  try {
    const formData = new FormData();

    formData.append("image", file);
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }

    const res = await axios.post("http://localhost:4000/upload", formData);
    console.log(res.data);
    return res.data.imageUrl;
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data?.message || error.message || "Failed to upload image"
    );
  }
});

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setSearchItem: (state, action: PayloadAction<string>) => {
      state.searchItem = action.payload;
      state.currentPage = 1;
    },
    removeImage: (state, action: PayloadAction<number>) => {
      state.uploadedImages = state.uploadedImages.filter(
        (_, index) => index !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      //get all
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something wend Wrong";
      })
      // single product
      .addCase(getProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.selectedProduct = null;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load product";
      })
      //create
      .addCase(createProduct.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })

      // update
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.data.findIndex((p) => p._id === action.payload._id);
        if (index !== -1) state.data[index] = action.payload;
      })

      //delete
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.data = state.data.filter((p) => p._id !== action.payload);
      })
      //upload image
      .addCase(uploadImage.pending, (state) => {
        state.loading = true;
      })
      .addCase(uploadImage.fulfilled, (state, action) => {
        state.loading = false;
        state.uploadedImages.push(action.payload); // add uploaded URL
      })
      .addCase(uploadImage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Image upload failed";
      });
  },
});
export default ProductSlice.reducer;
export const { setPage, setSearchItem ,removeImage} = ProductSlice.actions;
