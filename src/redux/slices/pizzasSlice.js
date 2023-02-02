import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        setProduct(state, action) {
            state.items = action.payload.items
        }
    },
})

export const { setProduct } = pizzasSlice.actions

export default pizzasSlice.reducer