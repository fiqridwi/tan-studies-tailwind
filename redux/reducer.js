import { createSlice } from "@reduxjs/toolkit";
import products from "../data/products";
import { PURGE } from "redux-persist";

const initialState = {
  products: products,
  cartAmount: 0,
  total: 0,
  cartItems: [],
  id: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    sendId: (state, action) => {
      const productId = action.payload;
      state.id = productId;
    },
    addToCart: (state, { payload }) => {
      const product = state.products.find((item) => item.id === payload.id);
      // product.quantity = product.quantity - 1;
      state.cartAmount = state.cartAmount + 1;
    },
    removeFromCart: (state, { payload }) => {
      const product = state.products.find((item) => item.id === payload.id);
      // product.quantity = product.quantity + 1;
      state.cartAmount = state.cartAmount - 1;
    },
    buyProduct: (state, { payload }) => {
      const product = state.products.find((item) => item.id === payload.id);
      product.quantity = product.quantity - state.cartAmount;
    },
  },
});

export const { sendId, addToCart, removeFromCart, buyProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
