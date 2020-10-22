import React, {createContext, useEffect, useReducer, useState} from 'react';
import taskReducer, { defaultTaskState } from '../reducers/taskReducer';

export const TaskContext = createContext();

const TaskContextProvider = props => {

    // const getData = () => {
    //     const strData = localStorage.getItem('tasks');
    //     const data = JSON.parse(strData);
    //     return data || [];
    // };
    // const [tasks, setTasks] = useState(getData);

    const [taskState, dispatch] = useReducer(taskReducer, [], () => {
        const strData = localStorage.getItem('taskState');
        return JSON.parse(strData) || defaultTaskState;
    });

    useEffect(() => {
        const strData = JSON.stringify(taskState);
        localStorage.setItem('taskState', strData);

    }, [taskState]);

    // const addTask = (title, deadline) => {
    //     deadline = deadline && moment(deadline).unix() * 1000;

    //     setTasks([
    //         ...tasks,
    //         {
    //             id: v4(),
    //             title,
    //             deadline
    //         }
    //     ]);
    // }

    // const removeTask = id => {
    //     const filtered = tasks.filter(task => task.id != id);
    //     setTasks(filtered);
    // }

    const {tasks, loading} = taskState;
    
    return(
        <TaskContext.Provider value={{tasks, loading, dispatch}}>
            {props.children}
        </TaskContext.Provider>
    )
};

export default TaskContextProvider;