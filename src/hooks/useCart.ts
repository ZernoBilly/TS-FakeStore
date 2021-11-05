import { useSelector } from "react-redux";
import { State } from "../state/combinedReducers";
import { IShopItems } from "../interfaces/interfaces";

const useCart = (id: number) => {
  const cartItems: IShopItems[] = useSelector(
    (state: State) => state.cartItems
  );

  return cartItems.map((item) => item.id).includes(id);
};
export default useCart;
