import { constants } from "../constants";
import { Dispatch } from "redux";
import axios from "axios";

import { IShopItems } from "../../interfaces/interfaces";

const getShopItems = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products/");
    dispatch({ type: constants.GET_ALL_SHOPITEMS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export default getShopItems;
