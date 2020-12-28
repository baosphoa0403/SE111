import {combineReducers} from "redux";
import movieReducers from "../../components/ListMovie/module/reducers/MovieReducer"
import detailReducer from "../../page/Detail/module/reducers/detailReducer"
import signInReducer from "../../page/SignIn/module/reducer/signInReducer"
const rootReducer = combineReducers({
   // girlReducers
   movieReducers,
   detailReducer,
   signInReducer
})
export default rootReducer