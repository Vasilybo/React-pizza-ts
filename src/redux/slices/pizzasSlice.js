import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        setPizzas(state, action) {
            state.items = action.payload.items
        }
    },
})

export const { setPizzas } = pizzasSlice.actions

export default pizzasSlice.reducer