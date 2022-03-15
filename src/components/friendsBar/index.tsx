import React,{useState} from "react";
import * as S from "./style"
import search from "../../img/search.svg"
import FriendCard from "./friendCard";




function FriendsBar() {
    const [showUsers, setShowUsers] = useState(false);

    function Results(){
        setShowUsers(true);
    }

    function ResultsOff(){
        setShowUsers(false);
    }

    return(
        <S.FriendsBar>
            <S.Search>
                <img src={search} alt=""/>
                <S.SearchBar type="text" placeholder="Buscar" onFocus={()=> setShowUsers(true)} onBlur={()=> setShowUsers(false)} /> 
            </S.Search>
            <S.SearchResults isHigh={showUsers}/>
            <h2>Amigos online</h2>
            <S.FriendsList>
                <FriendCard name="Usuário"/>
                <FriendCard name="Usuário"/>
                <FriendCard name="Usuário"/>
                <FriendCard name="Usuário"/>
                <FriendCard name="Usuário"/>
                <FriendCard name="Usuário"/>
                <FriendCard name="Usuário"/>
                <FriendCard name="Usuário"/>
            </S.FriendsList>
            

        </S.FriendsBar> 
    )
}

export default FriendsBar;



