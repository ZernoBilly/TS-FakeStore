import { constants } from "../constants";

import { ShopItemsAction } from "../types";

const initState = {
  id: null,
  title: null,
  price: null,
  description: null,
  category: null,
  image: null,
  rating: {
    rate: null,
    count: null,
  },
  amount: 1,
};

const shopItemReducer = (state = initState, action: ShopItemsAction) => {
  switch (action.type) {
    case constants.GET_ALL_SHOPITEMS:
      return action.payload;

    default:
      return state;
  }
};

export default shopItemReducer;
