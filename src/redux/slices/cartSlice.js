import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    totalPrice: 0,
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct (state, action) {
            state.items.push(action.payload);
        },
        removeProduct (state, action) {
            state.items = state.items.filter(obj => obj.id !== action.payload);
        },
        clearProduct (state, action) {
            state.items = [];
        },
    },
})

export const {  } = cartSlice.actions

export default cartSlice.reducer