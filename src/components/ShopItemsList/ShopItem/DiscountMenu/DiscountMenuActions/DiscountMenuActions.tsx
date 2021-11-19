import React from "react";

import IconButton from "../../../../IconButton/IconButton";
import Button from "../../../../Button/Button";

import { ActionsConstainer, AmountContainer, ButtonsContainer } from "./styled";

type DiscountMenuActionsProps = {
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
  discountAmount: number;
  setItemToSale: () => void;
  removeItemFromSale: () => void;
  setDiscountAmount: React.Dispatch<React.SetStateAction<number>>;
};

const DiscountMenuActions: React.FC<DiscountMenuActionsProps> = ({
  setMenuActive,
  discountAmount,
  setItemToSale,
  removeItemFromSale,
  setDiscountAmount,
}) => {
  return (
    <ActionsConstainer>
      <AmountContainer>
        <IconButton
          handleClick={() => setDiscountAmount(discountAmount - 1)}
          type={"decrease"}
          shape={"square"}
        />
        <p>{discountAmount}%</p>
        <IconButton
          handleClick={() => setDiscountAmount(discountAmount + 1)}
          type={"increase"}
          shape={"square"}
        />
      </AmountContainer>

      <ButtonsContainer>
        <Button
          handleClick={() => {
            setItemToSale();
            setMenuActive(false);
          }}
          label={"Set discount"}
          type={"add"}
        >
          set discount
        </Button>
        <Button
          handleClick={() => {
            removeItemFromSale();
            setMenuActive(false);
          }}
          label={"Remove discount"}
          type={"remove"}
        >
          remove discount
        </Button>
      </ButtonsContainer>
    </ActionsConstainer>
  );
};

export default DiscountMenuActions;
