import React from "react";
import PiuBox from "./piuBox";
import PiuCard from "./piuCard";
import * as S from "./style";

function Feed() {
  return (
    <S.Feed>
      <S.NewPiuSection>
        <PiuBox />
      </S.NewPiuSection>
      <S.CamposPiu>
        <PiuCard/>
        <PiuCard/>
        <PiuCard/>
        <PiuCard/>
      </S.CamposPiu>
    </S.Feed>
  );
}

export default Feed;
