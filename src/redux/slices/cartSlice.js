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
            state.totalPrice = state.items.reduce((sum, obj) => {
                obj.price + sum
            }, 0)
        },
        removeProduct (state, action) {
            state.items = state.items.filter(obj => obj.id !== action.payload);
        },
        clearProduct (state) {
            state.items = [];
        },
    },
})

export const { addProduct, removeProduct, clearProduct } = cartSlice.actions

export default cartSlice.reducer