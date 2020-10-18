import { v4 } from "uuid";

export const addUser = (name, email, age) => ({
    type: 'ADD_USER',
    id: v4(),
    name,
    email,
    age
});