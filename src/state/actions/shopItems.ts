import { constants } from "../constants";
import { Dispatch } from "redux";
import axios from "axios";
import { IShopItems } from "../../interfaces/interfaces";

import { url } from "../api";

export const getShopItems = () => async (dispatch: Dispatch) => {
  try {
    const { data }: any = await axios.get(url.GET_ALL);
    const newData = await data.map((item: IShopItems) => ({
      ...item,
      amount: 1,
      discount: { onSale: false, discount: 0, discountedPrice: 0 },
    }));
    dispatch({ type: constants.GET_ALL_SHOPITEMS, payload: newData });
  } catch (error) {
    console.log(error);
  }
};

export const updateShopItem = (item: IShopItems) => (dispatch: Dispatch) => {
  dispatch({ type: constants.UPDATE_SHOP_ITEM, payload: item });
};
