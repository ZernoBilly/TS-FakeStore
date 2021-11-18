import React from "react";
import { useSelector } from "react-redux";

import ShoppingCartIcon from "../ShoppingCartIcon/ShoppingCartIcon";

import { IShopItems } from "../../interfaces/interfaces";
import { State } from "../../state/combinedReducers";

import { TopBarConstainer } from "./styled";

const TopBar = () => {
  const cartItems: IShopItems[] = useSelector(
    (state: State) => state.cartItems
  );

  return (
    <TopBarConstainer>
      {cartItems.length > 0 && <ShoppingCartIcon cartItems={cartItems} />}
    </TopBarConstainer>
  );
};

export default TopBar;
