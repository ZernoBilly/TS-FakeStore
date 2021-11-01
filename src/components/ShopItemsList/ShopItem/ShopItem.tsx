import React from "react";

import Button from "../../Button/Button";

import { IShopItems } from "../../../interfaces/interfaces";

import { ItemContainer, ImageContainer, ItemTitle } from "./styled";

type ShopItemProps = {
  shopItem: IShopItems;
};

const ShopItem: React.FC<ShopItemProps> = ({ shopItem }) => {
  return (
    <ItemContainer>
      <ItemTitle>
        <p>{shopItem.title}</p>
      </ItemTitle>
      <p>{shopItem.price}</p>
      <ImageContainer>
        <img src={shopItem.image} alt={shopItem.title} />
      </ImageContainer>
      <Button handleClick={() => alert("Button Clicked")} />
    </ItemContainer>
  );
};

export default ShopItem;
