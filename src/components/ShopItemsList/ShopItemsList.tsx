import React from "react";
import { useSelector } from "react-redux";

import ShopItem from "./ShopItem/ShopItem";

import { IShopItems } from "../../interfaces/interfaces";

import { State } from "../../state/combinedReducers";

const ShopItemsList: React.FC = () => {
  const shopItems: IShopItems[] = useSelector(
    (state: State) => state.shopItems
  );

  console.log(shopItems);

  return (
    <div>
      {shopItems.length > 0 &&
        shopItems.map((value, index) => (
          <ShopItem key={index} shopItem={value} />
        ))}
    </div>
  );
};

export default ShopItemsList;
