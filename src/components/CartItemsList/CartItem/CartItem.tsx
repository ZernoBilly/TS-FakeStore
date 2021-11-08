import React, { useState } from "react";
import useActions from "../../../hooks/useActions";
import useAmount from "../../../hooks/useAmount";

import { deleteCartItem } from "../../../state/actions/cartItems";

import { fixedTotalPrice } from "../../../utils/functions";

import IconButton from "../../IconButton/IconButton";

import { IShopItems } from "../../../interfaces/interfaces";

import { CartItemContainer } from "./styled";

type CartItemProps = {
  cartItem: IShopItems;
};

const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
  const removeItemHandler = useActions(deleteCartItem);
  const increaseAmount = useAmount(cartItem, +1);
  const decreaseAmount = useAmount(cartItem, -1);

  return (
    <CartItemContainer>
      <p>
        {cartItem.title} {cartItem.amount}
      </p>
      <IconButton
        handleClick={() => removeItemHandler(cartItem.id)}
        label={"remove"}
      ></IconButton>
      <button
        onClick={() => {
          increaseAmount();
        }}
      >
        +
      </button>
      <button onClick={() => cartItem.amount > 1 && decreaseAmount()}>-</button>
      <p>{fixedTotalPrice(cartItem.price, cartItem.amount)}</p>
    </CartItemContainer>
  );
};

export default CartItem;
