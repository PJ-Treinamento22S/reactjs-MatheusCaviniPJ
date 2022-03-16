import React from "react";
import * as S from "./style";

interface MenuItemProps {
  text: string;
  icon: string;
  isActive?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ text, icon, isActive }) => {
  return (
    <S.MenuComponent isActive={isActive}>
      <img src={icon} alt="" />
      <h2>{text}</h2>
    </S.MenuComponent>
  );
};

export default MenuItem;
