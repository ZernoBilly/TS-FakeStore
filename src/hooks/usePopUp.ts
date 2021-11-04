import { useRef } from "react";

const usePopUp = (initialValue: any) => {
  const showPopUpRef = useRef<any>(initialValue);

  return showPopUpRef;
};

export default usePopUp;
