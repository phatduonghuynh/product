import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

const rootReducer = combineReducers({
    allProducts: productReducer,
})

export default rootReducer;