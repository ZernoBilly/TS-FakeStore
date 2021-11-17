import React from "react";
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
        <IconButton
          handleClick={() => cartItem.amount > 1 && decreaseAmount()}
          type={"decrease"}
          shape={"square"}
        ></IconButton>

        <PiecesTag>{cartItem.amount}</PiecesTag>

        <IconButton
          handleClick={() => {
            increaseAmount();
          }}
          type={"increase"}
          shape={"square"}
        ></IconButton>

        <PriceTag>
          {cartItem.discount.onSale
            ? fixedTotalPrice(
                cartItem.discount.discountedPrice,
                cartItem.amount
              )
            : fixedTotalPrice(cartItem.price, cartItem.amount)}{" "}
          €
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
