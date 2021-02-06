import * as ActionType from "../constants/constants"
const inititalState = {
   listMovie: [],
   listShoes: []
}
const movieReducer  = (state=inititalState, action) => {
   
    
    switch (action.type) {
        case ActionType.FETCH_LIST_MOVIE:
            state.listMovie = action.payload
            break;
        case "GetListShoes":
            console.log(action);
            state.listShoes = action.payload
            break;
        default:
            break;
    }

    return {...state}
}

export default movieReducer;