import React from "react";

import { StyledIconButton } from "./styled";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

type IconButtonProps = {
  handleClick: () => void;
  label?: string;
  type: string;
} & (
  | { shape: "circle"; height?: string; width?: string }
  | { shape: "square"; height?: string; width?: string }
);

const IconButton: React.FC<IconButtonProps> = ({
  handleClick,
  label,
  shape,
  height,
  width,
  type,
}) => {
  return (
    <StyledIconButton onClick={handleClick}>
      {type === "increase" ? (
        <AiOutlinePlus style={{ height: "100%" }}></AiOutlinePlus>
      ) : (
        <AiOutlineMinus></AiOutlineMinus>
      )}
    </StyledIconButton>
  );
};

export default IconButton;
