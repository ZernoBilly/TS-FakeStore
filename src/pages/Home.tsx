import React, { FC, useEffect } from "react";

import useFetch from "../hooks/useFetch";

import { IShopItems } from "../interfaces/interfaces";

const Home: FC = () => {
  const { data, loading, error } = useFetch<IShopItems[]>(
    "https://fakestoreapi.com/products"
  );

  return <div></div>;
};

export default Home;
