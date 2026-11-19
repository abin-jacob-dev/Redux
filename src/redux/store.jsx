import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'
import loggerMiddleware from "./loggerMiddleware";
import userSlice from './userSlice'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        users: userSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loggerMiddleware)
})

export default store