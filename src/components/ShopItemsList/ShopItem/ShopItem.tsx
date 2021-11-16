import React, { useState } from "react";
import { addCartItem } from "../../../state/actions/cartItems";
import useActions from "../../../hooks/useActions";
import useCart from "../../../hooks/useCart";
import usePopUp from "../../../hooks/usePopUp";
import useDiscount from "../../../hooks/useDiscount";

import Button from "../../Button/Button";
import PopUp from "../../PopUp/PopUp";

import { IShopItems } from "../../../interfaces/interfaces";

import { ItemContainer, ImageContainer, ItemTitle, PriceTag } from "./styled";

type ShopItemProps = {
  shopItem: IShopItems;
};

const ShopItem: React.FC<ShopItemProps> = ({ shopItem }) => {
  const addToCartHandler = useActions(addCartItem);
  const isItemInCart = useCart(shopItem.id);
  const showPopUpRef = usePopUp(null);
  const {
    onSale,
    setOnSale,
    setDiscountAmount,
    discountAmount,
    discountedPrice,
  } = useDiscount(shopItem);

  console.log(shopItem, onSale);

  return (
    <ItemContainer>
      <ImageContainer>
        <img src={shopItem.image} alt={shopItem.title} />
      </ImageContainer>
      <ItemTitle>
        <h5>{shopItem.title}</h5>
      </ItemTitle>
      <PriceTag>{`${shopItem.price} €`}</PriceTag>
      <Button
        handleClick={() => {
          !isItemInCart && addToCartHandler(shopItem);
          !isItemInCart && showPopUpRef.current.show();
        }}
        label={"Add"}
        type={"add"}
      />
      <p>{discountedPrice}</p>
      <button onClick={() => setOnSale(true)}>set discount</button>
      <button onClick={() => setOnSale(false)}>remove discount</button>
      <button onClick={() => setDiscountAmount(discountAmount + 1)}>+</button>
      <button>-</button>
      <PopUp ref={showPopUpRef} message={"Item added to cart"} type={"add"} />
    </ItemContainer>
  );
};

export default ShopItem;
