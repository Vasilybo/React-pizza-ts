import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
    'pizzas/fetchPizzasById', async (params) => {
        const { currentPage, activeCategory, selectedSort, search } = params
        const { data } = await axios.get(`https://632c28bf5568d3cad87e6524.mockapi.io/pizzas?page=${currentPage}&limit=4&${activeCategory > 0
            ? `category=${activeCategory}`
            : ''}&sortBy=${selectedSort.sort}&order=asc${search}`)
        return data
    }
)

const initialState = {
    items: [],
}

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        setPizzas(state, action) {
            state.items = action.payload
        }
    },
    extraReducers: {
        [fetchPizzas.fulfilled]: (state, action) => {
            console.log(state, "ВСЕ ОК")
        }
    },
})

export const { setPizzas } = pizzasSlice.actions

export default pizzasSlice.reducer