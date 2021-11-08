import React from "react";
import { IShopItems } from "../../interfaces/interfaces";

import { ShoppingCartIconContainer } from "./styled";

import { BsCart4 } from "react-icons/bs";

type ShoppingCartIconProps = {
  cartItems: IShopItems[];
};

const ShoppingCartIcon: React.FC<ShoppingCartIconProps> = ({ cartItems }) => {
  console.log(cartItems);

  const TotalAmount = cartItems.reduce((acc, cum) => {
    return ((acc as number) + cum.price * cum.amount) as number;
  }, 0);

  return (
    <ShoppingCartIconContainer>
      <BsCart4 style={{ fontSize: "1.2rem" }}></BsCart4>
      <p>{cartItems.length > 0 && TotalAmount.toFixed(2)} €</p>
    </ShoppingCartIconContainer>
  );
};

export default ShoppingCartIcon;
