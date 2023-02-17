import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isChartOpen: false,
};

const CartSlice = createSlice ( {
    name: "cart",
    initialState,
    reducers: {
        toggleOpen: (state) => {
            state.isChartOpen = !state.isChartOpen
        },
    },
})

export const { toggleOpen } = CartSlice.actions;
export default CartSlice.reducer;