import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit'
import axios from "axios";
import {RootState} from "../store";

export const fetchPizzas = createAsyncThunk<PizzaItems[], Record<string, string>>(
    'pizzas/fetchPizzasStatus', async (params) => {
        const { currentPage, activeCategory, selectedSort, search } = params
        const { data } = await axios.get(`https://632c28bf5568d3cad87e6524.mockapi.io/pizzas?page=${currentPage}&limit=4&${activeCategory > 0
            ? `category=${activeCategory}`
            : ''}&sortBy=${selectedSort.sort}&order=asc${search}`)
        return data
    }
)

type PizzaItems = {
    id: string,
    name: string,
    price: number,
    imageUrl: string,
    sizes: number[],
    types: number[],
}

interface PizzasSliceState {
    items: PizzaItems[]
    status: 'loading' | 'success' | 'error';
}

const initialState: PizzasSliceState = {
    items: [],
    status: 'loading', // loading | success | error
}

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        setPizzas(state, action: PayloadAction<PizzaItems[]>) {
            state.items = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
                    state.status = 'loading'
                    state.items = []
                })
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.items = action.payload
            state.status = 'success'
        })
        builder.addCase(fetchPizzas.rejected, (state) => {
            state.status = 'error'
            state.items = []
        })
    },
    // extraReducers: {
    //     [fetchPizzas.pending]: (state) => {
    //         state.status = 'loading'
    //         state.items = []
    //     },
    //     [fetchPizzas.fulfilled]: (state, action) => {
    //         state.items = action.payload
    //         state.status = 'success'
    //     },
    //     [fetchPizzas.rejected]: (state) => {
    //         state.status = 'error'
    //         state.items = []
    //     },
    //     },
    })

export const pizzasSelector = (state: RootState) => state.pizzas

export const { setPizzas } = pizzasSlice.actions

export default pizzasSlice.reducer