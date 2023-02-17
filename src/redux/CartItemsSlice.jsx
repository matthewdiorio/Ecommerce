import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems: [],
    total: 0,
    count: 0,

}

const CartItemsSlice = createSlice({
    name: "cartItems",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.count += 1
            const cartItem = state.cartItems.find((product) => product.id === action.payload.id)
            if(cartItem){
                cartItem.count += 1
            } else {
                state.cartItems.push({ ...action.payload, count: 1})
            }
        },
        removeFromCart: (state, action) => {
            state.count -= 1
            const cartItem = state.cartItems.find((product) => product.id === action.payload.id)
            if(cartItem){
                cartItem.count -= 1
                if(cartItem.count === 0){
                    state.cartItems = state.cartItems.filter((product) => product.id !== cartItem.id)
                }
            }
        },
        calculateTotal: (state) => {
            let total = 0;
            state.cartItems.forEach((product) => {
                total +=  product.count * product.price
            })
            state.total = total
        }
    },
})

export const { addToCart, removeFromCart, calculateTotal } = CartItemsSlice.actions;
export default CartItemsSlice.reducer;