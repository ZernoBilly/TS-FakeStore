import React from "react";

import { StyledIconButton } from "./styled";

interface changeAmount {
  type: "increase" | "decrease";
}

interface remove {
  type: "remove";
}

type IconBttonProps = {
  handleClick: () => void;
  label?: string;
  type?: remove | changeAmount;
};

const IconButton: React.FC<IconBttonProps> = ({ handleClick, label, type }) => {
  return <StyledIconButton onClick={handleClick}>{label}</StyledIconButton>;
};

export default IconButton;
