import { constants } from "../constants";
import { Dispatch } from "redux";

import { IShopItems } from "../../interfaces/interfaces";

export const addCartItem = (item: IShopItems) => (dispatch: Dispatch) => {
  dispatch({ type: constants.ADD_CART_ITEM, payload: item });
};

export const updateCartItem = (item: IShopItems) => (dispatch: Dispatch) => {
  dispatch({ type: constants.UPDATE_CART_ITEM, payload: item });
};

export const deleteCartItem = (id: IShopItems) => (dispatch: Dispatch) => {
  dispatch({ type: constants.DELETE_CART_ITEM, payload: id });
};
