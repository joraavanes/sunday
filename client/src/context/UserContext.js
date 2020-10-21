import React, { createContext, useState, useReducer, useEffect } from 'react'
import userReducer from '../reducers/userReducer';

export const UserContext = createContext();

const UserContextProvider = props => {

    // const [users, setUsers] = useState(defaultUsers);    
    const [users, dispatch] = useReducer(userReducer, [], ()=>{
        const users = localStorage.getItem("users");
        return JSON.parse(users) || [];
    });

    useEffect(()=>{
        const usersString = JSON.stringify(users);
        localStorage.setItem('users', usersString);
        
    }, [users]);

    return (
        <UserContext.Provider value={{users, dispatch}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
