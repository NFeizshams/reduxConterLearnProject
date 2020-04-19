const isLoggedReducer = (state = false , action) =>{

    switch(action.type){
        case 'SIN_IN':
            return !state;
        default :
        return state;
    }
}

export default isLoggedReducer;