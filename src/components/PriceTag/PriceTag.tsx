import React from "react";

import { PriceTagContainer } from "./styled";

type PriceTagProps = {
  price: number;
  discountedPrice?: number;
};

const PriceTag: React.FC<PriceTagProps> = ({ price }) => {
  return (
    <PriceTagContainer>
      <p>{price}</p>
    </PriceTagContainer>
  );
};

export default PriceTag;
