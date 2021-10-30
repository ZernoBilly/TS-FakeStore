export interface IShopItems {
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
}

export interface IShopItemsList {
  ShopItemsList: IShopItems;
}
