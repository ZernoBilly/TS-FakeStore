import React from "react";

import { StyledButton } from "./styled";

type ButtonProps = {
  handleClick: () => void;
  label: string;
  type: "add" | "remove";
};

const Button: React.FC<ButtonProps> = ({ handleClick, label, type }) => {
  return (
    <StyledButton onClick={handleClick} color={type}>
      <p>{label.toUpperCase()}</p>
    </StyledButton>
  );
};

export default Button;
