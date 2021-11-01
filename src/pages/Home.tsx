import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import getShopItems from "../state/actions/shopItems";

import ShopItemsList from "../components/ShopItemsList/ShopItemsList";
import SideBar from "../components/SideBar/SideBar";
import PopUp from "../components/PopUp/PopUp";

import { MainContainer } from "./styled";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShopItems());
  }, []);

  const popUpRef = useRef<React.MutableRefObject<any>>(null);

  return (
    <MainContainer>
      <PopUp ref={popUpRef} message={"Alert"} />
      <ShopItemsList />
      <SideBar />
    </MainContainer>
  );
};

export default Home;
