export const defaultTaskState = {
    tasks: [],
    category: '',
    sortDate: true,
    sortTitle: undefined,
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

        case 'REMOVE_TASK':
            const tasks = state.tasks.filter(task => task.id !== action.id);
            return {
                ...state,
                tasks
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
        
        case 'SORT_BY_TITLE':
            const sortTitle = state.sortTitle ? false : true;
            const sortedTasksTitle = state.tasks.sort((a,b) => 
                    sortTitle ? a.title.localeCompare(b.title) : -a.title.localeCompare(b.title)
            );

            return {
                ...state,
                sortTitle,
                tasks: sortedTasksTitle,
            };

        default:
            return state;
    }
}

export default taskReducer;