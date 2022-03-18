import React, { useState, useEffect } from "react";
import * as S from "./style";
import searchIcon from "../../img/search.svg";
import FriendCard from "./friendCard";
import api from "../../config/API";

function FriendsBar() {
  const [showUsers, setShowUsers] = useState(false);

  function Results() {
    setShowUsers(true);
  }

  function ResultsOff() {
    setShowUsers(false);
  }

  const[users, setUsers] = useState<any[]>([]);

  useEffect(()=>{
    api.get("/users").then(response => { 
      setUsers(response.data);
      console.log(response)});
    }, []);


  const [search, setSearch] = useState("")
  function handleSearch(e: any){
    const search = e.target.value; 
    setSearch(search);
  }

  return (
    <S.FriendsBar>
      <S.Search>
        <img src={searchIcon} alt="" />
        <S.SearchBar
          type="text"
          placeholder="Buscar"
          onFocus={() => setShowUsers(true)}
          onBlur={() => setShowUsers(false)}
          onInput={handleSearch}
        />
      </S.Search>
      <S.SearchResults isHigh={showUsers}>
        {users.map(user=> (search!="" && user.username.toLowerCase().startsWith(search.toLowerCase())) &&<FriendCard online= {false} key = {user.id} name={user.username} photo ={user.photo}/>)}
      </S.SearchResults>
      <h2>Amigos online</h2>
      <S.FriendsList>
        {users.map(user => <FriendCard online= {true} key = {user.id} name={user.username} photo ={user.photo}/>)}
      </S.FriendsList>
    </S.FriendsBar>
  );
}

export default FriendsBar;
