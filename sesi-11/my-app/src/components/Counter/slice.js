import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    number: 0
}


const counterSlice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        increment: (state) => {
            state.number += 1 
        },
        decrement: (state) => {
            state.number -= 1
        }
    }
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer