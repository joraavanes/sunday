import React, { useContext, useState } from 'react'
import moment from 'moment'
import { TaskContext } from '../../context/TaskContext'

const TaskForm = () => {
    const {addTask} = useContext(TaskContext);

    const [title, setTitle] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleTitleChange = e => setTitle(e.target.value);
    const handelDeadlineChange = e => setDeadline(e.target.value);

    const handleFormSubmit = e => {
        e.preventDefault();
        addTask(title, deadline);

        setTitle('');
        setDeadline('');
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input 
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Title"
                    value={title}
                    onChange={handleTitleChange}
                />
                <input 
                    type="date"
                    name="deadline" 
                    id="deadline" 
                    placeholder={moment().format('yyyy-MM-DD')} 
                    value={deadline} 
                    onChange={handelDeadlineChange}
                />
                <input type="submit"/>
            </form>
        </div>
    );
};

export default TaskForm;