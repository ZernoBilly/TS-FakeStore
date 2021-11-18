import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getShopItems } from "../state/actions/shopItems";

import ShopItemsList from "../components/ShopItemsList/ShopItemsList";
import CartItemsList from "../components/CartItemsList/CartItemsList";
import TopBar from "../components/TopBar/TopBar";

import { MainContainer } from "./styled";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShopItems());
  }, []);

  return (
    <MainContainer>
      <TopBar />
      <ShopItemsList />
      <CartItemsList />
    </MainContainer>
  );
};

export default Home;
