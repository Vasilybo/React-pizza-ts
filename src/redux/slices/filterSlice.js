import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    activeCategory: 0,
    currentPage: 1,
    sort: {
        name: 'популярности',
        sortProperty: 'rating',
    }
}

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setActiveCategory (state, action) {
            state.activeCategory = action.payload
        },
        setSelectedSort (state, action) {
            state.sort = action.payload
        },
        setCurrentPage (state, action) {
            state.currentPage = action.payload
        },
    },
})

export const filterSelector = (state) => state.filter

export const { setActiveCategory, setSelectedSort, setCurrentPage } = filterSlice.actions

export default filterSlice.reducer