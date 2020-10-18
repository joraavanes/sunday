
function userReducer(state, action){
    switch(action.type){
        case 'ADD_USER':
            return [
                ...state,{
                    id: action.id,
                    name: action.name,
                    email: action.email,
                    age: action.age
                }
            ];
        default:
            break;
    }
}

export default userReducer;