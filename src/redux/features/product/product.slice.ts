import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IProduct } from "../../../pages/products/Products";

export interface ProductState {
  value: IProduct[];
}

const initialState: ProductState = {
  value: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    updateProduct: (state, action: PayloadAction<IProduct>) => {
      state.value.push(action.payload);
    },
  },
});

export const { updateProduct } = productSlice.actions;

export default productSlice.reducer;
