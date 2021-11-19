import React, { useState } from "react";

import { IShopItems } from "../../../../interfaces/interfaces";
import { AiOutlineMenu } from "react-icons/ai";

import DiscountMenuActions from "./DiscountMenuActions/DiscountMenuActions";

import { DiscountMenuContainer, DiscountMenuButton } from "./styled";

type DiscountMenuProps = {
  shopItem: IShopItems;
  discountAmount: number;
  setItemToSale: () => void;
  removeItemFromSale: () => void;
  setDiscountAmount: React.Dispatch<React.SetStateAction<number>>;
};

const DiscountMenu: React.FC<DiscountMenuProps> = ({
  shopItem,
  discountAmount,
  setItemToSale,
  removeItemFromSale,
  setDiscountAmount,
}) => {
  const [menuActive, setMenuActive] = useState<boolean>(false);

  console.log(menuActive);
  return (
    <DiscountMenuContainer menuActive={menuActive}>
      <DiscountMenuButton>
        <button onClick={() => setMenuActive(!menuActive)}>
          <AiOutlineMenu></AiOutlineMenu>
        </button>
      </DiscountMenuButton>
      {menuActive && (
        <DiscountMenuActions
          shopItem={shopItem}
          discountAmount={discountAmount}
          setItemToSale={setItemToSale}
          removeItemFromSale={removeItemFromSale}
          setDiscountAmount={setDiscountAmount}
        />
      )}
    </DiscountMenuContainer>
  );
};

export default DiscountMenu;
