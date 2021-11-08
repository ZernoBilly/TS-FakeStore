import React from "react";
import { addCartItem } from "../../../state/actions/cartItems";
import useActions from "../../../hooks/useActions";
import useCart from "../../../hooks/useCart";
import useAmount from "../../../hooks/useAmount";

import Button from "../../Button/Button";

import { IShopItems } from "../../../interfaces/interfaces";

import { ItemContainer, ImageContainer, ItemTitle, PriceTag } from "./styled";

type ShopItemProps = {
  shopItem: IShopItems;
};

const ShopItem: React.FC<ShopItemProps> = ({ shopItem }) => {
  const addToCartHandler = useActions(addCartItem);
  const isItemInCart = useCart(shopItem.id);
  const arr = useAmount(shopItem, 1);

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
        handleClick={() => !isItemInCart && addToCartHandler(shopItem)}
        label={"Add"}
        type={"add"}
      />
    </ItemContainer>
  );
};

export default ShopItem;
