import * as ActionType from "../constants/constants.jsx"
const userLocal = JSON.parse(localStorage.getItem("user"))
const inititalState = {
   user: userLocal
}
const signInReducer  = (state=inititalState, action) => {
   
    
    switch (action.type) {
        case ActionType.SIGN_IN_API:
            state.user = action.payload
            console.log(state);
            
            break;
    
        default:
            break;
    }

    return {...state}
}

export default signInReducer;