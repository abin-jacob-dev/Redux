import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import fetchUsers from '../redux/actions/userActions';
import { changeUsername } from '../redux/counterSlice';

function Users() {
    const [inputUsername, setInputUsername] = useState("")
    const username = useSelector((state) => state.counter.username)
    var users = useSelector((state) => state.counter.users)
    var dispatch = useDispatch()
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
            {users?.map((user) => (
                <div key={user.id}>
                    <p>{user.name}</p>
                </div>
            ))}
        </>
    )
}

export default Users