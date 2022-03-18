import React, { useEffect, useState, createContext } from "react";
import PiuBox from "./piuBox";
import PiuCard from "./piuCard";
import * as S from "./style";
import api from "../../config/API";
import { UserName } from "../friendsBar/friendCard/style";


interface piuProps {
  user: {
    username: string;
    photo: string;
  };
  id?: string;
  text: string;
  likes: any;
}

interface reloadData{
  setReload: React.Dispatch<React.SetStateAction<string>>
}

export const RealoadContext = createContext({} as reloadData)

function Feed() {
  const [pius, setPius] = useState<piuProps[]>([]);
  const [reload, setReload] = useState("");

  useEffect(() => {
    api.get("/pius").then((response) => {
      setPius(response.data);
      console.log(response);
    });
  }, [reload]);
  return (
    <S.Feed>
      <S.NewPiuSection>
        <RealoadContext.Provider value = {{ setReload }}>
          <PiuBox />
        </RealoadContext.Provider>
      </S.NewPiuSection>
      <S.CamposPiu>
        {pius.map((piu) => (
          <PiuCard
            key={piu.id}
            text={piu.text}
            photo={piu.user.photo}
            username={piu.user.username}
            likes={piu.likes.length}
          />
        ))}
      </S.CamposPiu>
    </S.Feed>
  );
}

export default Feed;
