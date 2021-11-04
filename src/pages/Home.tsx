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

  const showPopUpRef = useRef<any>(null);

  return (
    <MainContainer>
      <PopUp ref={showPopUpRef} message={"Alert"} type={"Error"} />

      <button onClick={() => showPopUpRef.current?.show()}></button>
      <ShopItemsList />
      <SideBar />
    </MainContainer>
  );
};

export default Home;
