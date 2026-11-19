function increment() {
    return {
        type: "INCREMENT",

    }
}
function decrement() {
    return {
        type: "DECREMENT",
    }

}
function reset() {
    return {
        type: "RESET",
    }

}
function setCount(value) {
    return {
        type: "SET_COUNT",
        payload: value
    }
}

export {
    increment,
    decrement,
    reset,
    setCount
}