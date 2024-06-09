import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  items: JSON.parse(localStorage.getItem("products")) || [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const newProduct = { ...action.payload, id: uuidv4() };
      state.items.push(newProduct);
      localStorage.setItem("products", JSON.stringify(state.items));
    },
    updateProduct: (state, action) => {
      const index = state.items.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
        localStorage.setItem("products", JSON.stringify(state.items));
      }
    },
    deleteProduct: (state, action) => {
      state.items = state.items.filter(
        (product) => product.id !== action.payload.id
      );
      localStorage.setItem("products", JSON.stringify(state.items));
    },
  },
});

export const { addProduct, updateProduct, deleteProduct } =
  productSlice.actions;
export default productSlice.reducer;
