import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./ShopingCart/cartSlice";


const Store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
   
  },
});

export default Store;
