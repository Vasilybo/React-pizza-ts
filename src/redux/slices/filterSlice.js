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
        setPageCount (state, action) {
            state.pageCount = action.payload
        },
    },
})

export const { setActiveCategory, setSelectedSort, setPageCount } = filterSlice.actions

export default filterSlice.reducer