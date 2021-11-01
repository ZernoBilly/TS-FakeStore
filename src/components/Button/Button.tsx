import React from "react";

type ButtonProps = {
  handleClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ handleClick }) => {
  return <button onClick={handleClick}>Click</button>;
};

export default Button;
