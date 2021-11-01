import React, { forwardRef, useImperativeHandle, useState } from "react";

const PopUp = forwardRef((props: { message: string }, ref) => {
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
    <div>
      <h3>{props.message}</h3>
    </div>
  );
});

export default PopUp;
