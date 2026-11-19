import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
// import fetchUsers from '../redux/actions/userActions';
import { changeUsername } from '../redux/counterSlice';
import { fetchUsers } from '../redux/userSlice';

function Users() {
    const dispatch = useDispatch()
    const { users, loading, error } = useSelector((state) => state.users)

console.log(users, Array.isArray(users));
    const [inputUsername, setInputUsername] = useState("")
    const username = useSelector((state) => state.counter.username)
    // var users = useSelector((state) => state.counter.users)
    const handleFetchUsers = () => {
        dispatch(fetchUsers())
    }
    const handleChangeUsername = (e) => {
        dispatch(changeUsername(inputUsername))
    }
    const handleInputUsername = (e) => {
        setInputUsername(e.target.value)
    }
    return (
        <>
            <div>Users</div>
            <p>{username}</p>
            <input onChange={handleInputUsername} placeholder='Username' type="text" />
            <button onClick={handleChangeUsername}>Submit</button>
            <button onClick={handleFetchUsers}>fetch Users</button>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && Array.isArray(users) && users.map((user) => (
                <div key={user.id}>
                    <p>{user.name}</p>
                </div>
            ))}
        </>
    )
}

export default Users