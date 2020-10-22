import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Link, Route,Switch } from 'react-router-dom'
import Dashboard from './src/components/Dashboard';
import User from './src/components/User/User';
import TaskContextProvider from './src/context/TaskContext';
import UserContextProvider, { UserContext } from './src/context/UserContext';
import styles from './src/styles/index.css'

const routes = (
    <Router>
        <div className={styles.georgia}>
            <ul>
                <li className={styles.item}>
                    <Link to="/">Dashboard</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/user">User</Link>
                </li>
            </ul>
        </div>
        <Switch>
            <div className={styles.wrapper}>
                <div className={styles.sidebar}>
                    <h2>Sidebar</h2>
                </div>
                <div className={styles.main}>
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
                </div>
            </div>
        </Switch>
    </Router>
);


render(routes, document.querySelector('#app'));