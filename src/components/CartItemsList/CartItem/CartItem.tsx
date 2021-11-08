import React, { useState } from "react";
import useActions from "../../../hooks/useActions";
import useAmount from "../../../hooks/useAmount";

import { deleteCartItem } from "../../../state/actions/cartItems";

import { fixedTotalPrice } from "../../../utils/functions";

import IconButton from "../../IconButton/IconButton";
import Button from "../../Button/Button";

import { IShopItems } from "../../../interfaces/interfaces";

import {
  CartItemContainer,
  AmountContainer,
  PriceTag,
  PiecesTag,
  ItemTitle,
} from "./styled";

type CartItemProps = {
  cartItem: IShopItems;
};

const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
  const removeItemHandler = useActions(deleteCartItem);
  const increaseAmount = useAmount(cartItem, +1);
  const decreaseAmount = useAmount(cartItem, -1);

  return (
    <CartItemContainer>
      <ItemTitle>
        {cartItem.title} {cartItem.amount}
      </ItemTitle>

      <AmountContainer>
        <button onClick={() => cartItem.amount > 1 && decreaseAmount()}>
          -
        </button>

        <PiecesTag>{cartItem.amount}</PiecesTag>

        <button
          onClick={() => {
            increaseAmount();
          }}
        >
          +
        </button>

        <PriceTag>
          {fixedTotalPrice(cartItem.price, cartItem.amount)} €
        </PriceTag>
      </AmountContainer>
      <Button
        handleClick={() => removeItemHandler(cartItem.id)}
        label={"remove"}
        type={"remove"}
      ></Button>
    </CartItemContainer>
  );
};

export default CartItem;
