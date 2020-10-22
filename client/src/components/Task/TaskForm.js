import React, { useContext, useState } from 'react'
import moment from 'moment'
import { v4 } from 'uuid'
import { TaskContext } from '../../context/TaskContext'
import { addTask } from '../../actions/taskActions';

const TaskForm = () => {
    const {dispatch} = useContext(TaskContext);

    const [title, setTitle] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleTitleChange = e => setTitle(e.target.value);
    const handelDeadlineChange = e => setDeadline(e.target.value);

    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(
            addTask(
                v4(),
                title,
                moment(deadline).unix() * 1000
        ));

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