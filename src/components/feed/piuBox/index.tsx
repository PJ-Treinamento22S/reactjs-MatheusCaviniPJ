import React, {useState} from "react";
import { ReactDOM } from "react";
import * as S from "./style"
import myPhoto from "../../../img/pp.jpeg"
import cam from "../../../img/camera.svg"
import vid from "../../../img/video.svg"
import emoji from "../../../img/smile.svg"
import at from "../../../img/at-sign.svg"
import Button from "../../button";
import Modal from "../../modal";



function PiuBox(){
    const [color, setColor] = useState("black");
    const[colorB, setColorB]= useState("#787779")
    const [char, setChar] = useState(0);
    function handleChar(e:any){
        setChar(e.target.value.length)
        setColor((e.target.value.length >140) ? "#a00" : "black");
        setColorB((e.target.value.length >140) ? "#a00" : "#787779");
        return(e.target.value.length);
    }
    return(
    <S.PiuBox>

        <S.PhotoAndPiu>
            <S.UserCircle src={myPhoto}/>
            <S.PiuArea color={colorB} cols={10} wrap="soft" placeholder="Qual seu piu de hoje?" onInput={handleChar}/>
        </S.PhotoAndPiu>
        <S.Features>
            <img src={cam}/>
            <img src={vid}/>
            <img src={emoji}/>
            <img src={at}/>
            <Button text="Piar" height={32} width={120}/>
            <S.CharCount color={color}>{char}/140</S.CharCount>
        </S.Features>
    </S.PiuBox>

    )
}


export default PiuBox;

