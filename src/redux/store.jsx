import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'
import loggerMiddleware from "./loggerMiddleware";

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loggerMiddleware)
})

export default store