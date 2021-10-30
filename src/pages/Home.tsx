import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import getShopItems from "../state/actions/shopItems";

import ShopItemsList from "../components/ShopItemsList/ShopItemsList";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShopItems());
  }, []);

  return (
    <div>
      <ShopItemsList />
    </div>
  );
};

export default Home;
