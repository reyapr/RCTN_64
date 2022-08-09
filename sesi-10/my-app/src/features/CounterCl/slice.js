import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    number: 0,
    title: 'Learn Redux Toolkit'
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.number += 1
        },
        decrement: (state) => {
            state.number -= 1
        },
        dynamicIncrement: (state, action) => {
            state.number += action.payload
        }
    }
})

export const { increment, decrement, dynamicIncrement } = counterSlice.actions

export default counterSlice.reducer