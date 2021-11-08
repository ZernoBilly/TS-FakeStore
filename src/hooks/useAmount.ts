import { IShopItems } from "../interfaces/interfaces";
import useActions from "./useActions";
import { updateCartItem } from "../state/actions/cartItems";

const useAmount = (item: IShopItems, amount: number) => {
  const updateAmountHandler = useActions(updateCartItem);

  const updateAmount = () => {
    updateAmountHandler({ ...item, amount: item.amount + amount });
  };
  return updateAmount;
};

export default useAmount;
