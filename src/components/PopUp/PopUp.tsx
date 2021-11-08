import React, { forwardRef, useImperativeHandle, useState } from "react";

import { PopUpContainer, PopUpText } from "./styled";

type PopUpProps = {
  message: string;
  type: string;
};

const PopUp = forwardRef<PopUpProps, any>(({ message, type }, ref: any) => {
  const [showPopUp, setShowPopUp] = useState<boolean>(false);

  useImperativeHandle(ref, () => ({
    show() {
      setShowPopUp(true);
      setTimeout(() => {
        setShowPopUp(false);
      }, 3000);
    },
  }));

  return (
    <PopUpContainer
      visibility={showPopUp ? "visible" : "hidden"}
      backgroundColor={type}
    >
      <PopUpText>{showPopUp && message}</PopUpText>
    </PopUpContainer>
  );
});

export default PopUp;
