import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../store";

type Sort = {
    name: string;
    sortProperty: 'rating' | 'title' | 'price';
}

interface FilterSliceState {
    searchValue: string,
    activeCategory: number,
    currentPage: number,
    sort: Sort,
}

const initialState: FilterSliceState = {
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
        setActiveCategory (state, action: PayloadAction<number>) {
            state.activeCategory = action.payload
        },
        setSearchValue (state, action: PayloadAction<string>) {
            state.searchValue = action.payload
        },
        setSelectedSort (state, action: PayloadAction<Sort>) {
            state.sort = action.payload
        },
        setCurrentPage (state, action: PayloadAction<number>) {
            state.currentPage = action.payload
        },
    },
})

export const filterSelector = (state: RootState) => state.filter

export const { setActiveCategory, setSelectedSort, setCurrentPage, setSearchValue } = filterSlice.actions

export default filterSlice.reducer