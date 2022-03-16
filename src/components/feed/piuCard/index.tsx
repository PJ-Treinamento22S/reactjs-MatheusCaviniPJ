import React from "react";
import * as S from "./style"

import likeIcon from "../../../img/Heart.svg"
import highlight from "../../../img/highlight.svg"
import repost from "../../../img/repeat.svg"
import report from "../../../img/report.svg"

function PiuCard(){
    return(
        <S.Card>
            <S.PhotoAndPiu>
                <S.UserCircle/>
                <S.UserAndPiu>
                    <S.Info>
                        <h3>Usuário</h3>
                        <p>dd/mm/aaaa - hh:mm</p>
                    </S.Info>
                    <S.PiuField>
                        <p>Texto do Piu</p>
                    </S.PiuField>
                </S.UserAndPiu>
            </S.PhotoAndPiu>
            <S.Reactions>
                <S.Likes>
                    <img src={likeIcon}alt="" />
                    <p>100</p>
                </S.Likes>
                <img src={highlight} alt="" />
                <img src={repost} alt="" />
                <img src={report} alt="" />
            </S.Reactions>
        </S.Card>
    )
}

export default PiuCard;