import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducers";

const reducers = combineReducers({
    allProduct: productReducer,
    product : selectedProductReducer
})

export default reducers;