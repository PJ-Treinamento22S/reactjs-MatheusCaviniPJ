import React, { ButtonHTMLAttributes } from "react";
import { ButtonBox } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  height: number;
  width: number;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ height, width, text, onClick }) => {
  return (
    <ButtonBox height={height} width={width} onClick={onClick}>
      {text}
    </ButtonBox>
  );
};

export default Button;
