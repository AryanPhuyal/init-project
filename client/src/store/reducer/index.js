import { combineReducers } from "redux";
import authReducer from './auth'
import productReducer from './product'

const rootreducer = combineReducers({
    auth: authReducer,
    product:productReducer
});

export default rootreducer;
