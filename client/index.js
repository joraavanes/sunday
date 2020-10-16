import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Link, NavLink, Route,Switch } from 'react-router-dom'
import App from './src/app';
import Dashboard from './src/components/Dashboard';
import User from './src/components/User/User';
import TaskContextProvider from './src/context/TaskContext';
import UserContextProvider, { UserContext } from './src/context/UserContext';

const routes = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Dashboard</Link>
                </li>
                <li>
                    <Link to="/user">User</Link>
                </li>
            </ul>
        </div>
        <Switch>
            <Route path="/" exact={true}>
                <h1>Sunday --- Managing tasks</h1>
                <TaskContextProvider>
                    <UserContextProvider>
                        <Dashboard/>
                    </UserContextProvider>
                </TaskContextProvider>
            </Route>
            <Route path="/user" exact={true}>
                <UserContextProvider>
                    <User/>
                </UserContextProvider>
            </Route>
        </Switch>
    </Router>
);


render(routes, document.querySelector('#app'));