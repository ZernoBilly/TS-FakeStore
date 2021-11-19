import React from "react";
import { addCartItem } from "../../../state/actions/cartItems";
import useActions from "../../../hooks/useActions";
import useCart from "../../../hooks/useCart";
import usePopUp from "../../../hooks/usePopUp";
import useDiscount from "../../../hooks/useDiscount";

import Button from "../../Button/Button";
import PopUp from "../../PopUp/PopUp";
import OnSaleTag from "./OnSaleTag/OnSaleTag";
import DiscountMenu from "./DiscountMenu/DiscountMenu";
import PriceTag from "../../PriceTag/PriceTag";

import { IShopItems } from "../../../interfaces/interfaces";

import { ItemContainer, ImageContainer, ItemTitle } from "./styled";

type ShopItemProps = {
  shopItem: IShopItems;
};

const ShopItem: React.FC<ShopItemProps> = ({ shopItem }) => {
  const addToCartHandler = useActions(addCartItem);
  const isItemInCart = useCart(shopItem.id);
  const showPopUpRef = usePopUp(null);
  const {
    discountAmount,
    setDiscountAmount,
    setItemToSale,
    removeItemFromSale,
  } = useDiscount(shopItem);

  return (
    <ItemContainer>
      {shopItem.discount.onSale && (
        <OnSaleTag discountAmount={discountAmount} />
      )}
      <ImageContainer>
        <img src={shopItem.image} alt={shopItem.title} />
      </ImageContainer>
      <ItemTitle>
        <h5>{shopItem.title}</h5>
      </ItemTitle>
      <PriceTag price={shopItem.price} />
      {/* <PriceTag>
        {shopItem.discount.onSale &&
          `${shopItem.discount.discountedPrice.toFixed(2)} €`}
      </PriceTag> */}
      <Button
        handleClick={() => {
          !isItemInCart && addToCartHandler(shopItem);
          !isItemInCart && showPopUpRef.current.show();
        }}
        label={"Add"}
        type={"add"}
      />
      <DiscountMenu
        shopItem={shopItem}
        discountAmount={discountAmount}
        setItemToSale={setItemToSale}
        removeItemFromSale={removeItemFromSale}
        setDiscountAmount={setDiscountAmount}
      />
      <PopUp ref={showPopUpRef} message={"Item added to cart"} type={"add"} />
    </ItemContainer>
  );
};

export default ShopItem;
