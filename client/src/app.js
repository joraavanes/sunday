import React from 'react'
import { render } from 'react-dom'
import Dashboard from './components/Dashboard'
import TaskContextProvider from './context/TaskContext';
import UserContextProvider from './context/UserContext';

function App(){

    return (
        <>
            <h1>Sunday --- Managing tasks</h1>
            <TaskContextProvider>
                <UserContextProvider>
                    <Dashboard/>
                </UserContextProvider>
            </TaskContextProvider>
        </>
    );
}

// render(<App/>, document.querySelector('#app'));
export default App;