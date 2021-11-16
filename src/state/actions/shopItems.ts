import { constants } from "../constants";
import { Dispatch } from "redux";
import axios from "axios";
import { IShopItems } from "../../interfaces/interfaces";

import { url } from "../api";

export const getShopItems = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await axios.get(url.GET_ALL);
    dispatch({ type: constants.GET_ALL_SHOPITEMS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateShopItem = (item: IShopItems) => (dispatch: Dispatch) => {
  dispatch({ type: constants.UPDATE_SHOP_ITEM, payload: item });
};
