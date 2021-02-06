import {combineReducers} from "redux";
import movieReducers from "../../components/ListMovie/module/reducers/MovieReducer"
import detailReducer from "../../page/Detail/module/reducers/detailReducer"
import signInReducer from "../../page/SignIn/module/reducer/signInReducer"
import Loading from "../reducer/loadingReducer";
const rootReducer = combineReducers({
   // girlReducers
   Loading,
   movieReducers,
   detailReducer,
   signInReducer
})
export default rootReducer