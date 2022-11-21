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
            const findProduct = state.items.find((obj) => obj.id === action.payload.id)

            if (findProduct) {
                findProduct.count++
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                });
                state.totalPrice = state.items.reduce((sum, obj) => {
                            return (obj.price * obj.count) + sum
                        }, 0)
            }
            state.items.push(action.payload);
            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price + sum
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