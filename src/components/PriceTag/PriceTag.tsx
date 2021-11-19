import React from "react";

import { PriceTagContainer, Price, DiscountedPrice } from "./styled";

type PriceTagProps = {
  price: number | boolean | string;
  discountedPrice?: boolean | number | string;
  fontSize: "small" | "medium";
};

const PriceTag: React.FC<PriceTagProps> = ({
  price,
  discountedPrice,
  fontSize,
}) => {
  return (
    <PriceTagContainer>
      <Price fontSize={fontSize}>{price} €</Price>
      <DiscountedPrice>{discountedPrice}</DiscountedPrice>
    </PriceTagContainer>
  );
};

export default PriceTag;
