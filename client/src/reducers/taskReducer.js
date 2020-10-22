export const defaultTaskState = {
    tasks: [],
    category: '',
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

        default:
            return state;
    }
}

export default taskReducer;