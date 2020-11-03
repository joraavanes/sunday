import React, { lazy } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Link, Route,Switch } from 'react-router-dom'
import TaskContextProvider from './src/context/TaskContext';
import UserContextProvider, { UserContext } from './src/context/UserContext';
const Dashboard = lazy(() => import('./src/components/Dashboard'));
const User = lazy(() => import('./src/components/User/User'));
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
        <article>
            <div className={styles.wrapper}>
                <div className={styles.sidebar}>
                    <h2>Sidebar</h2>
                </div>
                <div className={styles.main}>
                    <React.Suspense fallback={<p>Loading ...</p>}>
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
                    </React.Suspense>
                </div>
            </div>
        </article>
    </Router>
);


render(routes, document.querySelector('#app'));