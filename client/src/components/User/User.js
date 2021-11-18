import React, { useContext, useState } from 'react';
import { addUser } from '../../actions/userActions';
import { UserContext } from '../../context/UserContext';

const User = () => {

    const {users, dispatch} = useContext(UserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    const handleAddSubmit = e => {
        e.preventDefault();

        dispatch(addUser(name,email, age));
        setName('');
        setEmail('');
        setAge('');
    };

    return (
        <div>
            <h2>User Settings</h2>
            {users && users.map(user => <li key={user.id}>{user.name} {user.email}</li>)}
            <hr/>
            <form onSubmit={handleAddSubmit}>
                <div>
                    <label htmlFor="name">name</label>
                    <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input type="text" name="age" value={age} onChange={e => setAge(e.target.value)}/>
                </div>
                <input type="submit" value="Add user"/>
            </form>
        </div>
    );
};

export default User;