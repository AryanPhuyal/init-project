import { combineReducers } from "redux";
import authReducer from "./auth";
import productReducer from "./product";
import categoryReducer from "./categories";

const rootreducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  category: categoryReducer,
});

export default rootreducer;
