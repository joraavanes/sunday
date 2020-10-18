import React, {useContext} from 'react'
import { TaskContext } from '../context/TaskContext'
import { UserContext } from '../context/UserContext';
import TaskForm from './Task/TaskForm'
import TaskItem from './Task/TaskItem'

const Dashboard = () => {

    const {tasks} = useContext(TaskContext);
    const {users} = useContext(UserContext);

    return (
        <>
            <TaskForm/>
            <h2>Tasks</h2>
            {users && users.map(user => <p key={user.id}>{user.email}</p>)}
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>deadline</th>
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