import { combineReducers } from "redux";

import shopItemReducer from "../reducers/shopItemsReducer";
import cartItemReducer from "../reducers/cartItemsReducer";

const reducers = combineReducers({
  shopItems: shopItemReducer,
  cartItems: cartItemReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
