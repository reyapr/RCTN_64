import { configureStore } from "@reduxjs/toolkit";
import counterSlice from '../components/Counter/slice'

const store = configureStore({
    reducer: counterSlice
})

export default store;