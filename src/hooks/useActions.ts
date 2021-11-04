import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

const useActions = (action: any) => {
  const dispatch = useDispatch();
  const actionHandler = bindActionCreators(action, dispatch);

  return actionHandler;
};

export default useActions;
