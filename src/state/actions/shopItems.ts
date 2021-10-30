import { constants } from "../constants";
import { Dispatch } from "redux";
import axios from "axios";

import { url } from "../api";

const getShopItems = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await axios.get(url.GET_ALL);
    dispatch({ type: constants.GET_ALL_SHOPITEMS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export default getShopItems;
