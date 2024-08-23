import { combineReducers } from "redux";
import videos from "./videos";
import auth from "./auth";

const reducers = combineReducers({
    videos,
    auth,
})

export default reducers;