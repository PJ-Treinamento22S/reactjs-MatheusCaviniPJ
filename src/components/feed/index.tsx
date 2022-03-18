import React, {useEffect, useState} from "react";
import PiuBox from "./piuBox";
import PiuCard from "./piuCard";
import * as S from "./style";
import api from "../../config/API";
import { UserName } from "../friendsBar/friendCard/style";

interface piuProps{user:{
  username: string;
  photo: string;};
  id: string;
  text:string
  likes: any;
}

function Feed() {
  const [pius, setPius] = useState<piuProps[]>([]);

  useEffect(()=>{
    api.get("/pius").then(response => { 
      setPius(response.data);
      console.log(response)});
    }, []);
  return (
    <S.Feed>
      <S.NewPiuSection>
        <PiuBox />
      </S.NewPiuSection>
      <S.CamposPiu>
        {pius.map(piu => <PiuCard key={piu.id} text={piu.text} photo={piu.user.photo} username ={piu.user.username} likes={piu.likes.length}/>)}
      </S.CamposPiu>
    </S.Feed>
  );
}

export default Feed;
