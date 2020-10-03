import React, {useContext} from 'react'
import { TaskContext } from '../context/TaskContext'
import TaskForm from './Task/TaskForm';

const Dashboard = () => {

    const {tasks} = useContext(TaskContext);

    return (
        <>
            <TaskForm/>
            <h2>Tasks</h2>
            <ul>
                {tasks.map(task => (<li key={task.id}> {task.title}</li>))}
            </ul>
        </>
    );
};

export default Dashboard;