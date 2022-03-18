import React from "react";

import * as S from "./style";

interface friendCardProps {
  photo?: string;
  name?: string;
  online?: boolean;
}

const FriendCard: React.FC<friendCardProps> = ({ name, photo, online }) => {
  return (
    <S.FriendCard>
      <S.UserCircle src={photo} />
      {online && <div className="online"></div>}
      <S.UserName>{name}</S.UserName>
    </S.FriendCard>
  );
};

export default FriendCard;
