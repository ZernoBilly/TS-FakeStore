import React from "react";
import { addCartItem } from "../../../state/actions/cartItems";
import useActions from "../../../hooks/useActions";

import Button from "../../Button/Button";

import { IShopItems } from "../../../interfaces/interfaces";

import { ItemContainer, ImageContainer, ItemTitle } from "./styled";

type ShopItemProps = {
  shopItem: IShopItems;
};

const ShopItem: React.FC<ShopItemProps> = ({ shopItem }) => {
  const addToCartHandler = useActions(addCartItem);

  return (
    <ItemContainer>
      <ItemTitle>
        <p>{shopItem.title}</p>
      </ItemTitle>
      <p>{shopItem.price}</p>
      <ImageContainer>
        <img src={shopItem.image} alt={shopItem.title} />
      </ImageContainer>
      <Button handleClick={() => addToCartHandler(shopItem)} label={"Add"} />
    </ItemContainer>
  );
};

export default ShopItem;
