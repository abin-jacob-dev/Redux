function fetchUsers() {
    return async (dispatch) => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        dispatch({
            type: "SET_USERS",
            payload: data
        })
    }
}
export default fetchUsers