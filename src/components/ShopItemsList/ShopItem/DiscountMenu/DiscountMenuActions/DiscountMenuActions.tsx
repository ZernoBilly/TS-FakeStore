import React from "react";

import { IShopItems } from "../../../../../interfaces/interfaces";

import { ActionsConstainer } from "./styled";

type DiscountMenuActionsProps = {
  shopItem: IShopItems;
  discountAmount: number;
  setItemToSale: () => void;
  removeItemFromSale: () => void;
  setDiscountAmount: React.Dispatch<React.SetStateAction<number>>;
};

const DiscountMenuActions: React.FC<DiscountMenuActionsProps> = ({
  shopItem,
  discountAmount,
  setItemToSale,
  removeItemFromSale,
  setDiscountAmount,
}) => {
  return (
    <ActionsConstainer>
      <p>{shopItem.discount.discount}</p>
      <p>{discountAmount}</p>
      <button
        onClick={() => {
          setItemToSale();
        }}
      >
        set discount
      </button>
      <button
        onClick={() => {
          removeItemFromSale();
        }}
      >
        remove discount
      </button>
      <button onClick={() => setDiscountAmount(discountAmount + 1)}>+</button>
      <button
        onClick={() =>
          discountAmount > 0 && setDiscountAmount(discountAmount - 1)
        }
      >
        -
      </button>
    </ActionsConstainer>
  );
};

export default DiscountMenuActions;
