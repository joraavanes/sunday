import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

const User = () => {

    const {users} = useContext(UserContext);

    return (
        <div>
            <h2>User Settings</h2>
            {users.map(user => <li key={user.id}>{user.name} {user.email}</li>)}
        </div>
    )
};

export default User;
