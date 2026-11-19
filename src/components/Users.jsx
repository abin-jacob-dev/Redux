import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import fetchUsers from '../redux/actions/userActions';


function Users() {
    var users = useSelector((state) => state.users)
    var dispatch = useDispatch()
    const handleFetchUsers = () => {
        dispatch(fetchUsers())
    }
    return (
        <>
            <div>Users</div>
            <button onClick={ handleFetchUsers}>fetch Users</button>
            {users?.map((user) => (
                <div key={user.id}>
                    <p>{user.name}</p>
                </div>
            ))}
        </>
    )
}

export default Users