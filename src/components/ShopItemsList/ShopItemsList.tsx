import React from "react";
import { useSelector } from "react-redux";

import ShopItem from "./ShopItem/ShopItem";

import { ItemListContainer } from "./styled";

import { IShopItems } from "../../interfaces/interfaces";

import { State } from "../../state/combinedReducers";

const ShopItemsList: React.FC = () => {
  const shopItems: IShopItems[] = useSelector(
    (state: State) => state.shopItems
  );

  return (
    <ItemListContainer>
      {shopItems.length > 0 &&
        shopItems.map((value) => <ShopItem key={value.id} shopItem={value} />)}
    </ItemListContainer>
  );
};

export default ShopItemsList;
