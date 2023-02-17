import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice";
import CartItemsReducer from "./CartItemsSlice"
export const store = configureStore({
    reducer: {
        cart: CartReducer,
        cartItems: CartItemsReducer
    }
});