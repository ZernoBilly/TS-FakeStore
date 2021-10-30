export type ShopItems = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  amount?: number;
};

export type ShopItemsAction = {
  type: string;
  payload?: ShopItems[];
};

export type initState = {
  id: null;
  title: null;
  price: null;
  description: null;
  category: null;
  image: null;
  rating: {
    rate: null;
    count: null;
  };
  amount?: null;
};
