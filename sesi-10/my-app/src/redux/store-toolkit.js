import { configureStore } from "@reduxjs/toolkit";
import counterReducerClass from '../features/CounterCl/slice'
import counterReducerFn from '../features/CounterFn/slice'

const store = configureStore({
    reducer: {
        counterCl: counterReducerClass,
        counterFn: counterReducerFn
    }
})

export default store