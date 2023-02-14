import { createSlice } from '@reduxjs/toolkit'
import {RootState} from "../store";

const initialState = {
    searchValue: '',
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
        setSearchValue (state, action) {
            state.searchValue = action.payload
        },
        setSelectedSort (state, action) {
            state.sort = action.payload
        },
        setCurrentPage (state, action) {
            state.currentPage = action.payload
        },
    },
})

export const filterSelector = (state: RootState) => state.filter

export const { setActiveCategory, setSelectedSort, setCurrentPage, setSearchValue } = filterSlice.actions

export default filterSlice.reducer