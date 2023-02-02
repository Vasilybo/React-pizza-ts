import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const fetchUserById = createAsyncThunk(
    'users/fetchByIdStatus',
    async (userId: number, thunkAPI) => {
        const response = await userAPI.fetchById(userId)
        return response.data
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
})

export const { setPizzas } = pizzasSlice.actions

export default pizzasSlice.reducer