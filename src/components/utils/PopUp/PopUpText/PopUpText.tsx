import React, { forwardRef, useImperativeHandle, useState } from "react";

type PopUpProps = {
  message: string;
  type?: string;
};

const PopUpText = forwardRef((props: PopUpProps, ref) => {
  const [showPopUp, setShowPopUp] =
    useState<React.SetStateAction<boolean>>(false);

  useImperativeHandle(ref, () => ({
    showPopUp() {
      setShowPopUp(true);
      setTimeout(() => {
        setShowPopUp(false);
      }, 2000);
    },
  }));

  return <div>{props.message}</div>;
});

export default PopUpText;
