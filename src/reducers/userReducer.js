let initialState = {
    name: 'Shoma',
    fullname: 'Md Ariful',
    age: 0,
    country: ''
}

const user = (state = initialState, action)=>{
    // check which action type matches
    switch (action.type) {
        case 'CHANGE_NAME':
            state = {
                ...state,
                name: action.payload
            }
            return state;
        case 'INC_AGE':
           state = {
               ...state,
               age: state.age + 1
           } 
           return state;  
        case 'GET_FULLNAME':
           state = {
               ...state,
               fullname: state.fullname + action.payload
           }
           return state;
        default:
            return state;
    }
}

export default user;