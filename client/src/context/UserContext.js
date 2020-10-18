import React, { createContext, useState, useReducer } from 'react'
import userReducer from '../reducers/userReducer';

export const UserContext = createContext();

const UserContextProvider = props => {

    const defaultUsers = [
        {
            id: 1,
            name: 'Jora',
            email: 'JORA@gmail.com'
        },
        {
            id: 2,
            name: 'Kyle',
            email: 'kyle@gmail.com'
        }
    ];

    // const [users, setUsers] = useState(defaultUsers);    
    const [users, dispatch] = useReducer(userReducer, defaultUsers);

    return (
        <UserContext.Provider value={{users, dispatch}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
