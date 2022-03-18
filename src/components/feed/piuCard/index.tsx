import React, { useState } from "react";
import * as S from "./style";

import likeIcon from "../../../img/Heart.svg";
import likeIconFill from "../../../img/heartFill.svg";
import highlight from "../../../img/highlight.svg";
import repost from "../../../img/repeat.svg";
import report from "../../../img/report.svg";

interface PiuCardProps {
  username: string;
  photo: string;
  text: string;
  likes: number;
  created_at: string;
}

const PiuCard: React.FC<PiuCardProps> = ({ username, photo, text, likes, created_at }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [icon, setIcon] = useState(likeIcon);

  function handleLike(e: any) {
    if (liked) {
      setLikeCount(likeCount - 1);
      setIcon(likeIcon);
    } else {
      setLikeCount(likeCount + 1);
      setIcon(likeIconFill);
    }
    setLiked(!liked);
  }
  return (
    <S.Card>
      <S.PhotoAndPiu>
        <S.UserCircle src={photo} />
        <S.UserAndPiu>
          <S.Info>
            <h3>{username}</h3>
            <p>{created_at.slice(8,10)+"/"+created_at.slice(5,7)+"/"+created_at.slice(0,4)+" - "+created_at.slice(11,16)}</p>
          </S.Info>
          <S.PiuField>
            <p>{text}</p>
          </S.PiuField>
        </S.UserAndPiu>
      </S.PhotoAndPiu>
      <S.Reactions>
        <S.Likes onClick={handleLike}>
          <img src={icon} alt="" />
          <p>{likeCount}</p>
        </S.Likes>
        <img src={highlight} alt="" />
        <img src={repost} alt="" />
        <img src={report} alt="" />
      </S.Reactions>
    </S.Card>
  );
};

export default PiuCard;
