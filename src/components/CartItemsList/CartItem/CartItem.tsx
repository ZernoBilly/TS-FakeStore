import React from "react";
import useActions from "../../../hooks/useActions";
import useAmount from "../../../hooks/useAmount";

import { deleteCartItem } from "../../../state/actions/cartItems";
import usePopUp from "../../../hooks/usePopUp";

import { fixedTotalPrice } from "../../../utils/functions";

import IconButton from "../../IconButton/IconButton";
import Button from "../../Button/Button";
import PriceTag from "../../PriceTag/PriceTag";
import PopUp from "../../PopUp/PopUp";

import { IShopItems } from "../../../interfaces/interfaces";

import {
  CartItemContainer,
  AmountContainer,
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
  const showPopUpRef = usePopUp(null);

  return (
    <CartItemContainer>
      <ItemTitle>{cartItem.title}</ItemTitle>
      <PriceTag
        price={
          cartItem.discount.onSale
            ? fixedTotalPrice(
                cartItem.discount.discountedPrice,
                cartItem.amount
              )
            : fixedTotalPrice(cartItem.price, cartItem.amount)
        }
        fontSize={"small"}
      />

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
      </AmountContainer>

      <Button
        handleClick={() => {
          removeItemHandler(cartItem.id);
          showPopUpRef.current.show();
        }}
        label={"remove"}
        type={"remove"}
      ></Button>
      <PopUp
        ref={showPopUpRef}
        message={"Item removed from cart"}
        type={"remove"}
      />
    </CartItemContainer>
  );
};

export default CartItem;
