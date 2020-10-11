import React, { useContext } from 'react'
import { TaskContext } from '../../context/TaskContext'

const TaskItem = ({id, title, deadline, quantity}) => {
    const {removeTask} = useContext(TaskContext);

    const handleRemoveTask = () => removeTask(id);

    return (
        <tr>
            <td>{quantity}</td>
            <td>{title}</td>
            <td>{new Date(deadline).toLocaleDateString()}</td>
            <td><button onClick={handleRemoveTask}>Remove</button></td>
        </tr>
    );
};

export default TaskItem;