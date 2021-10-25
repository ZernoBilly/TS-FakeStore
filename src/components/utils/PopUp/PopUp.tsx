import React, { useRef } from "react";

import PopUpText from "./PopUpText/PopUpText";

const PopUp = () => {
  const popUpRef = useRef(null); //showPopUp()

  return (
    <div>
      <PopUpText ref={popUpRef} message={"Added"} />
    </div>
  );
};

export default PopUp;
