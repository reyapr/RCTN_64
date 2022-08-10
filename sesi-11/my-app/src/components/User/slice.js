import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const USERS_URL = 'https://jsonplaceholder.typicode.com/usasders'


export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const { data } = await axios.get(USERS_URL)
    return data
})

const initialState = {
    persons: {
        isLoading: false,
        data: []
    }
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.persons.data = action.payload
            state.persons.isLoading = false
        })
        builder.addCase(fetchUsers.pending, (state) => {
            state.persons.isLoading = true
        })
        builder.addCase(fetchUsers.rejected, (state) => {
            state.persons.isLoading = false
        })
    }
})

export default userSlice.reducer