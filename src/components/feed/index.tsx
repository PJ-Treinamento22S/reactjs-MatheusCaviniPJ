import React from "react";
import PiuBox from "./piuBox";
import * as S from "./style";

function Feed() {
  return (
    <S.Feed>
      <S.NewPiuSection>
        <PiuBox/>
      </S.NewPiuSection>
    </S.Feed>
  );
}

export default Feed;