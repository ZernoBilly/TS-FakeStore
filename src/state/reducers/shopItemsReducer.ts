import { constants } from "../constants";
import { IShopItems } from "../../interfaces/interfaces";

import { ShopItemsAction } from "../types";

// const initState = {
//   id: null,
//   title: null,
//   price: null,
//   description: null,
//   category: null,
//   image: null,
//   rating: {
//     rate: null,
//     count: null,
//   },
//   amount: 1,
//   discount: {
//     onSale: false,
//     discount: 0,
//   },
// };

const shopItemReducer = (state = [], action: ShopItemsAction) => {
  switch (action.type) {
    case constants.GET_ALL_SHOPITEMS:
      return action.payload;

    case constants.UPDATE_SHOP_ITEM:
      return (
        state.length > 0 &&
        state.map((item: IShopItems) =>
          item.id === action.payload.id ? action.payload : item
        )
      );

    default:
      return state;
  }
};

export default shopItemReducer;
