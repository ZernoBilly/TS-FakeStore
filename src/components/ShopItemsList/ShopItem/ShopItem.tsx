import React from "react";

import { IShopItems } from "../../../interfaces/interfaces";

type ShopItemProps = {
  shopItem: IShopItems;
};

const ShopItem = ({ shopItem }: ShopItemProps) => {
  return (
    <>
      <p>{shopItem.title}</p>
    </>
  );
};

export default ShopItem;
