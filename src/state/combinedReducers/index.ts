import { combineReducers } from "redux";

import shopItemReducer from "../reducers/shopItemsReducer";

const reducers = combineReducers({ shopItems: shopItemReducer });

export default reducers;

export type State = ReturnType<typeof reducers>;
