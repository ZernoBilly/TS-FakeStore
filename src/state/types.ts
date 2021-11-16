import { constants } from "./constants";

import { IShopItems } from "../interfaces/interfaces";

//Shop action types

export type ShopItemsList = {
  ShopItemsList: IShopItems[];
};

interface updateShopItemAction {
  type: constants.UPDATE_CART_ITEM;
  payload: IShopItems;
}

interface getAllShopItems {
  type: constants.GET_ALL_SHOPITEMS;
  payload: IShopItems[];
}

export type ShopItemsAction = getAllShopItems | updateCartItemAction;

//Cart action types
interface AddCartItemAction {
  type: constants.ADD_CART_ITEM;
  payload: IShopItems;
}

interface updateCartItemAction {
  type: constants.UPDATE_CART_ITEM;
  payload: IShopItems;
}

interface deleteCartItemAction {
  type: constants.DELETE_CART_ITEM;
  payload: number;
}

export type CartItemsAction =
  | AddCartItemAction
  | updateCartItemAction
  | deleteCartItemAction;
