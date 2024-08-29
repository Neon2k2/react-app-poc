import { combineReducers } from "redux";
import { allProductsReducer, productReducer } from "./reducers";

const reducer = combineReducers({
  allProducts: allProductsReducer,
  product: productReducer,
});

export default reducer;