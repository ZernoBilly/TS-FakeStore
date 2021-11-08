import { constants } from "../constants";

import { CartItemsAction } from "../types";

import { IShopItems } from "../../interfaces/interfaces";

const cartItemReducer = (state: [] = [], action: CartItemsAction) => {
  switch (action.type) {
    case constants.ADD_CART_ITEM:
      const newObject = { ...action.payload, amount: 1 };
      return [...state, newObject];

    case constants.UPDATE_CART_ITEM:
      return (
        state.length > 0 &&
        state.map((item: IShopItems) =>
          item.id === action.payload.id ? action.payload : item
        )
      );

    case constants.DELETE_CART_ITEM:
      return state.filter((item: IShopItems) => item.id !== action.payload);

    default:
      return state;
  }
};

export default cartItemReducer;
