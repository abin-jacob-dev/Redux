const loggerMiddleware = (store) => (next) => (action) => {
    console.log('Dispatching : ', action);
    const result = next(action)
    console.log("Updated State : ", store.getState());
    return result
}
export default loggerMiddleware