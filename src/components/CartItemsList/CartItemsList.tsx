import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../state/combinedReducers";

import CartItem from "./CartItem/CartItem";

import { IShopItems } from "../../interfaces/interfaces";

import { CartListContainer } from "./styled";

const CartItemsList = () => {
  const cartItems: IShopItems[] = useSelector(
    (state: State) => state.cartItems
  );

  return (
    <CartListContainer>
      {cartItems.length > 0 &&
        cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)}
    </CartListContainer>
  );
};

export default CartItemsList;
