import *  as ActionType from "../constants/ActionType"
const inititalState = {
   detailMovie: null
}
 const detailReducer = (state = inititalState , action ) => {
    switch (action.type) {
        case ActionType.FETCH_MOVIE_DETAIL:
            state.detailMovie = action.payload
            break;
    
        default:
            break;
    }
    return {...state}
}
export default detailReducer