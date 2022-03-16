import React from "react";

import * as S from "./style";

interface friendCardProps {
  photo?: string;
  name?: string;
}

const FriendCard: React.FC<friendCardProps> = ({ name, photo }) => {
  return (
    <S.FriendCard>
      <S.UserCircle src={photo} />
      <div className="online"></div>
      <S.UserName>{name}</S.UserName>
    </S.FriendCard>
  );
};

export default FriendCard;
