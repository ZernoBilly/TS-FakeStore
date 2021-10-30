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

export type ShopItemsList = {
  ShopItemsList: ShopItems[];
};

export type ShopItemsAction = {
  type: string;
  payload?: ShopItems[];
};
