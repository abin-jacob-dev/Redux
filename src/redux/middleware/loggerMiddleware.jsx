
import store from "../store/store";

const loggerMiddleware = (store) => (next) => (action) => {
    console.log('state before : ', store.getState());
    console.log('action : ', action);
    const result = next(action)
    console.log('state after : ', store.getState());
    return result
}

export default loggerMiddleware