import React from "react";
import { IShopItems } from "../../interfaces/interfaces";

import { ShoppingCartIconContainer } from "./styled";

import { BsCart4 } from "react-icons/bs";

type ShoppingCartIconProps = {
  cartItems: IShopItems[];
};

const ShoppingCartIcon: React.FC<ShoppingCartIconProps> = ({ cartItems }) => {
  const TotalAmount = cartItems.reduce((acc, cum) => {
    if (cum.discount.onSale) {
      acc = ((acc as number) +
        cum.discount.discountedPrice * cum.amount) as number;
    } else {
      acc = ((acc as number) + cum.price * cum.amount) as number;
    }
    return acc;
  }, 0);

  return (
    <ShoppingCartIconContainer>
      <BsCart4 style={{ fontSize: "1.2rem" }}></BsCart4>
      <p>{cartItems.length > 0 && TotalAmount.toFixed(2)} €</p>
    </ShoppingCartIconContainer>
  );
};

export default ShoppingCartIcon;
