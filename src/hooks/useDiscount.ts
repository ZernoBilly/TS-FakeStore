import { IShopItems } from "../interfaces/interfaces";
import React, { useState, useEffect } from "react";

const useDiscount = (item: IShopItems) => {
  const [onSale, setOnSale] = useState<boolean>(false);
  const [discountAmount, setDiscountAmount] = useState<number>(0);
  const [discountedPrice, setDiscountedPrice] = useState<number>(0);

  useEffect(() => {});

  return {
    onSale,
    setOnSale,
    discountedPrice,
    discountAmount,
    setDiscountAmount,
  };
};

export default useDiscount;
