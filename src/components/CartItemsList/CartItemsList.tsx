import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../state/combinedReducers";

import CartItem from "./CartItem/CartItem";
import ShoppingCartIcon from "../ShoppingCartIcon/ShoppingCartIcon";

import { IShopItems } from "../../interfaces/interfaces";

import { CartListContainer, StickyContainer } from "./styled";

const CartItemsList = () => {
  const cartItems: IShopItems[] = useSelector(
    (state: State) => state.cartItems
  );

  return (
    <CartListContainer>
      <StickyContainer>
        <ShoppingCartIcon cartItems={cartItems} />
        {cartItems.length > 0 &&
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)}
      </StickyContainer>
    </CartListContainer>
  );
};

export default CartItemsList;
