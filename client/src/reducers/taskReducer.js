export const defaultTaskState = {
    tasks: [],
    category: '',
    sortDate: true,
    loading: false
};

function taskReducer(state, action){
    
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    {
                        id: action.id,
                        title: action.title,
                        deadline: action.deadline
                    }
                ]
            };

        case 'SORT_BY_DATE':
            const sortDate = !state.sortDate;
            const sortedTasks = state.tasks.sort((a,b) =>
                sortDate ? (b.deadline - a.deadline) : (a.deadline - b.deadline)
            );

            return {
                ...state,
                sortDate,
                tasks: sortedTasks
            };

        case 'REMOVE_TASK':
            const tasks = state.tasks.filter(task => task.id !== action.id);
            return {
                ...state,
                tasks
            };

        default:
            return state;
    }
}

export default taskReducer;