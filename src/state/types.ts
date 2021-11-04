import { constants } from "./constants";

import { IShopItems } from "../interfaces/interfaces";

//Shop actions

export type ShopItemsList = {
  ShopItemsList: IShopItems[];
};

export type ShopItemsAction = {
  type: string;
  payload?: IShopItems[];
};

//Cart actions
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
