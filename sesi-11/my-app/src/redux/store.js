import { configureStore } from "@reduxjs/toolkit";
import counterSlice from '../components/Counter/slice'
import userSlice from '../components/User/slice'
import logger from "redux-logger";

const store = configureStore({
    reducer: {
        counter: counterSlice,
        users: userSlice
    },
    middleware: (defaultMiddleware) => defaultMiddleware().concat(logger)
})

export default store;