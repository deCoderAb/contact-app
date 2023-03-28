import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

const rootReducer = combineReducers({
    allReducers:productReducer
})

export default rootReducer;