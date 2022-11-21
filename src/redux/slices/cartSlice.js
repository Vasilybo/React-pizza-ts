import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    totalPrice: 0,
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
    },
})

export const {  } = cartSlice.actions

export default cartSlice.reducer