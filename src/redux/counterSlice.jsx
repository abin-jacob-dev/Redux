import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    username: 'Alex'
}
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        reset: (state) => {
            state.count = 0
        },
        changeUsername: (state, action) => {
            state.username = action.payload
        }
    },

})

export const {
    increment,
    decrement,
    reset,
    changeUsername,
} = counterSlice.actions

export default counterSlice.reducer