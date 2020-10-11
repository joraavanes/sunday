import React, {useContext} from 'react'
import { TaskContext } from '../context/TaskContext'
import TaskForm from './Task/TaskForm'
import TaskItem from './Task/TaskItem'

const Dashboard = () => {

    const {tasks} = useContext(TaskContext);

    return (
        <>
            <TaskForm/>
            <h2>Tasks</h2>
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