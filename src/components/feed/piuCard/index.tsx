import React from "react";
import * as S from "./style";

import likeIcon from "../../../img/Heart.svg";
import highlight from "../../../img/highlight.svg";
import repost from "../../../img/repeat.svg";
import report from "../../../img/report.svg";

interface PiuCardProps{
  username:string;
  photo: string;
  text:string;
  likes: number;
}

const PiuCard:React.FC<PiuCardProps> =({username, photo, text, likes})=>{
  return (
    <S.Card>
      <S.PhotoAndPiu>
        <S.UserCircle src={photo} />
        <S.UserAndPiu>
          <S.Info>
            <h3>{username}</h3>
            <p>dd/mm/aaaa - hh:mm</p>
          </S.Info>
          <S.PiuField>
            <p>{text}</p>
          </S.PiuField>
        </S.UserAndPiu>
      </S.PhotoAndPiu>
      <S.Reactions>
        <S.Likes>
          <img src={likeIcon} alt="" />
          <p>{likes}</p>
        </S.Likes>
        <img src={highlight} alt="" />
        <img src={repost} alt="" />
        <img src={report} alt="" />
      </S.Reactions>
    </S.Card>
  );
}

export default PiuCard;
