export const addTask = (id, title, deadline) => ({
    type: 'ADD_TASK',
    id,
    title,
    deadline
});

export const removeTask = id => ({
    type: 'REMOVE_TASK',
    id
});

export const sortTasksByDate = () => ({
    type: 'SORT_BY_DATE'
});

export const sortTasksByTitle = () => ({
    type: 'SORT_BY_TITLE'
});