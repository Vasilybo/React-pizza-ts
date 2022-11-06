import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    activeCategory: 0,
    sort: {
        name: 'популярности',
        sort: 'rating',
    }
}

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setActiveCategory (state, action) {
            state.activeCategory = action.payload
        },
    },
})

export const { setActiveCategory } = filterSlice.actions

export default filterSlice.reducer