import React, { FC } from "react";

import PopUp from "../components/utils/PopUp/PopUp";

import useFetch from "../hooks/useFetch";

import { IShopItems } from "../interfaces/interfaces";

const Home: FC = () => {
  const { data, loading, error } = useFetch<IShopItems[]>(
    "https://fakestoreapi.com/products"
  );

  return <div></div>;
};

export default Home;
