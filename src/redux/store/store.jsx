import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import loggerMiddleware from "../middleware/loggerMiddleware";

const state = {
    counter: {
        count: 0
    },
    cart: [],
    users: []
}
function counterReducer(initialCounterState = state.counter, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: initialCounterState.count + 1
            }
        case 'DECREMENT':
            return {

                count: initialCounterState.count - 1
            }
        case 'SET_COUNT':
            return {

                count: action.payload
            }
        case 'RESET':
            return {
                count: 0
            }

        default:
            return initialCounterState
    }
}

function cartReducer(initialCartState = state.cart, action) {
    return initialCartState
}

function usersReducer(initialUserState = state.users, action) {
    switch (action.type) {
        case "SET_USERS":
            return action.payload
        default:

            return initialUserState
    }
}

const rootReducer = combineReducers({
    counter: counterReducer,
    cart: cartReducer,
    users: usersReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk, loggerMiddleware))

export default store