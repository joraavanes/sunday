import React, { useContext, useState } from 'react'
import { TaskContext } from '../../context/TaskContext';

const TaskForm = () => {
    const [title, setTitle] = useState('');
    const {addTask} = useContext(TaskContext);

    const handleTitleChange = e => setTitle(e.target.value);

    const handleFormSubmit = e => {
        e.preventDefault();

        addTask(title);
        console.log('form submitted');
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="title" id="title" value={title} onChange={handleTitleChange}/>
                <input type="submit"/>
            </form>
        </div>
    );
};

export default TaskForm
