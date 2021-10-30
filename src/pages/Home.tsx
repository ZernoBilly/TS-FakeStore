import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import getShopItems from "../state/actions/shopItems";

import PopUp from "../components/utils/PopUp/PopUp";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShopItems());
  });

  return <div></div>;
};

export default Home;
