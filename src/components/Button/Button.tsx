import React from "react";

type ButtonProps = {
  handleClick: () => void;
  label: string;
};

const Button: React.FC<ButtonProps> = ({ handleClick, label }) => {
  return <button onClick={handleClick}>{label}</button>;
};

export default Button;
