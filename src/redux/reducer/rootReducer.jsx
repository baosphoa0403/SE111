import {combineReducers} from "redux";
import movieReducers from "../../components/ListMovie/module/reducers/MovieReducer"
import detailReducer from "../../page/Detail/module/reducers/detailReducer"
const rootReducer = combineReducers({
   // girlReducers
   movieReducers,
   detailReducer
})
export default rootReducer