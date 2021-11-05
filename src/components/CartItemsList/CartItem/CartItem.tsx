import React from "react";

import { IShopItems } from "../../../interfaces/interfaces";

import { CartItemContainer } from "./styled";

type CartItemProps = {
  cartItem: IShopItems;
};

const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
  return (
    <CartItemContainer>
      {cartItem.title}
      {cartItem.amount}
    </CartItemContainer>
  );
};

export default CartItem;
