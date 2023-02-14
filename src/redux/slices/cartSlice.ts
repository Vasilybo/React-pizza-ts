import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    totalPrice: 0,
    items: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addProduct (state, action) {
            const findProduct = state.items.find((obj) => obj.id === action.payload.id)

            if (findProduct) {
                findProduct.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                });
            }
                state.totalPrice = state.items.reduce((sum, obj) => {
                    return obj.price * obj.count + sum
                }, 0)
        },

        decrementProduct (state, action) {
            const findProduct = state.items.find((obj) => obj.id === action.payload)

            if (findProduct) {
                findProduct.count--;
            }
        },

        removeProduct (state, action) {
            state.items = state.items.filter((obj) => obj.id !== action.payload);
        },

        clearProduct (state) {
            state.items = [];
            state.totalPrice = 0;
        },
    },
})

export const selectorCart = (state) => state.cart
export const selectorCartItemById = (id) => (state) => state.cart.items.find((obj) => obj.id === id)

export const { addProduct, removeProduct, decrementProduct, clearProduct } = cartSlice.actions

export default cartSlice.reducer