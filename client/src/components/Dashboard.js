import React, {useContext, useEffect} from 'react';
import { sortTasksByDate, sortTasksByTitle } from '../actions/taskActions';
import { TaskContext } from '../context/TaskContext';
import { UserContext } from '../context/UserContext';
import TaskForm from './Task/TaskForm';
import TaskItem from './Task/TaskItem';

const Dashboard = () => {

    const {tasks, loading, dispatch} = useContext(TaskContext);
    const {users} = useContext(UserContext);

    useEffect(() => {
        dispatch(sortTasksByDate());
        console.log(users);
    }, []);

    return (
        <>
            <TaskForm/>
            <h2>Tasks</h2>
            {users && users.map(user => <p key={user.id}>{user.email}</p>)}

            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th onClick={() => dispatch(sortTasksByTitle())}>title</th>
                        <th onClick={() => dispatch(sortTasksByDate())}>Deadline</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, i) => (<TaskItem key={task.id} {...task} quantity={i+1}/>))}
                </tbody>
            </table>
        </>
    );
};

export default Dashboard;