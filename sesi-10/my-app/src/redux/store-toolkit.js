import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/CounterCl/slice'

const store = configureStore({
    reducer: counterReducer
})

export default store