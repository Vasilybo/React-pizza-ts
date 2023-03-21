import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
    'pizzas/fetchPizzasStatus', async (params) => {
        const { currentPage, activeCategory, selectedSort, search } = params
        const { data } = await axios.get(`https://632c28bf5568d3cad87e6524.mockapi.io/pizzas?page=${currentPage}&limit=4&${activeCategory > 0
            ? `category=${activeCategory}`
            : ''}&sortBy=${selectedSort}&order=asc${search}`)
        return data
    }
)

const initialState = {
    items: [],
    status: 'loading', // loading | success | error
}

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        setPizzas(state, action) {
            state.items = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.status = 'LOADING'
            state.items = []
        })
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.items = action.payload
            state.status = 'SUCCESS'
        })
        builder.addCase(fetchPizzas.rejected, (state) => {
            state.status = 'ERROR'
            state.items = []
        })
    },
})

export const pizzasSelector = (state) => state.pizzas

export const { setPizzas } = pizzasSlice.actions

export default pizzasSlice.reducer