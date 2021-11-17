import React from "react";

import { SaleTag } from "./styled";

type SaleTagProps = {
  discountAmount: number;
};

const OnSaleTag: React.FC<SaleTagProps> = ({ discountAmount }) => {
  return (
    <SaleTag>
      <p>{`-${discountAmount} %`}</p>
    </SaleTag>
  );
};

export default OnSaleTag;
