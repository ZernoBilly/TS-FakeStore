import { IShopItems } from "../interfaces/interfaces";
import { useState } from "react";
import useActions from "./useActions";
import { updateShopItem } from "../state/actions/shopItems";

const useDiscount = (item: IShopItems) => {
  const updateShopItemHandler = useActions(updateShopItem);
  const [discountAmount, setDiscountAmount] = useState<number>(
    item.discount.discount
  );

  const setItemToSale = () => {
    const newItem: IShopItems = {
      ...item,
      discount: {
        onSale: true,
        discount: discountAmount,
        discountedPrice: item.price - item.price * (discountAmount / 100),
      },
    };
    updateShopItemHandler(newItem);
  };

  const removeItemFromSale = () => {
    const newItem: IShopItems = {
      ...item,
      discount: { onSale: false, discount: 0, discountedPrice: 0 },
    };
    updateShopItemHandler(newItem);
    setDiscountAmount(0);
  };

  return {
    discountAmount,
    setDiscountAmount,
    setItemToSale,
    removeItemFromSale,
  };
};

export default useDiscount;
