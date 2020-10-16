import React, {createContext, useEffect, useState} from 'react';
import moment from 'moment'
import { v4 } from 'uuid'

export const TaskContext = createContext();

const TaskContextProvider = props => {

    const getData = () => {
        const strData = localStorage.getItem('tasks');
        const data = JSON.parse(strData);
        return data || [];
    };

    const [tasks, setTasks] = useState(getData);
    
    useEffect(() => {
        const strData = JSON.stringify(tasks);
        localStorage.setItem('tasks', strData);

    }, [tasks]);

    const addTask = (title, deadline) => {
        deadline = deadline && moment(deadline).unix() * 1000;

        setTasks([
            ...tasks,
            {
                id: v4(),
                title,
                deadline
            }
        ]);
    }

    const removeTask = id => {
        const filtered = tasks.filter(task => task.id != id);
        setTasks(filtered);
    }

    return(
        <TaskContext.Provider value={{tasks, addTask, removeTask}}>
            {props.children}
        </TaskContext.Provider>
    )
};

export default TaskContextProvider;