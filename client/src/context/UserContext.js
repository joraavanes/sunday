import React, { createContext, useContext, useState } from 'react'

export const UserContext = createContext();

const UserContextProvider = props => {

    const defaultUsers = [
        {
            id: 1,
            name: 'jora',
            email: 'jora@gmail.com'
        },
        {
            id: 2,
            name: 'Kyle',
            email: 'kyle@gmail.com'
        }
    ];

    const [users, setUsers] = useState(defaultUsers);    

    return (
        <UserContext.Provider value={{users}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
