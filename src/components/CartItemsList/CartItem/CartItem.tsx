import React from "react";

import { IShopItems } from "../../../interfaces/interfaces";

type CartItemProps = {
  cartItem: IShopItems;
};

const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
  return <div>{cartItem.title}</div>;
};

export default CartItem;
