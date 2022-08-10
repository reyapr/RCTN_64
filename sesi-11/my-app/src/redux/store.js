import { configureStore } from "@reduxjs/toolkit";
import counterSlice from '../components/Counter/slice'
import userSlice from '../components/User/slice'
import userAuth from '../components/Auth/slice'
import logger from "redux-logger";

const store = configureStore({
    reducer: {
        counter: counterSlice,
        users: userSlice,
        auth: userAuth
    },
    middleware: (defaultMiddleware) => defaultMiddleware().concat(logger)
})

export default store;