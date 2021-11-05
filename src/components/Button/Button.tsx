import React from "react";

import { StyledButton } from "./styled";

type ButtonProps = {
  handleClick: () => void;
  label: string;
};

const Button: React.FC<ButtonProps> = ({ handleClick, label }) => {
  return (
    <StyledButton onClick={handleClick}>
      <p>{label.toUpperCase()}</p>
    </StyledButton>
  );
};

export default Button;
