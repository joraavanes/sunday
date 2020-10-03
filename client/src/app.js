import React from 'react'
import { render } from 'react-dom'
import Dashboard from './components/Dashboard'
import TaskContextProvider from './context/TaskContext';

function App(){

    return (
        <>
            <h1>Sunday --- Managing tasks</h1>
            <TaskContextProvider>
                <Dashboard/>
            </TaskContextProvider>
        </>
    );
}

render(<App/>, document.querySelector('#app'));