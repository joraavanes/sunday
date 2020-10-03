import React, {createContext, useState} from 'react';

export const TaskContext = createContext();

const TaskContextProvider = props => {

    const [tasks, setTasks] = useState([{title: 'task 1', id: 1}, {title: 'task 2', id: 2}]);
    
    const addTask = title => {
        setTasks([
            ...tasks,
            {
                id: tasks.length + 1,
                title
            }
        ]);
    }

    return(
        <TaskContext.Provider value={{tasks, addTask}}>
            {props.children}
        </TaskContext.Provider>
    )
};

export default TaskContextProvider;