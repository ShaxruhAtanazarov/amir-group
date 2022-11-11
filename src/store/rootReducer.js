import { combineReducers } from "@reduxjs/toolkit";

// reducers
import { cartProductsReducer } from './slices/cart_slice'

const rootReducer = combineReducers({
  cartProducts: cartProductsReducer,
});

export default rootReducer;
