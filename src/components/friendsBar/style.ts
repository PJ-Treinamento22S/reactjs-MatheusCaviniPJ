import styled, { css } from "styled-components";

interface SearchResultsProps {
  isHigh: boolean;
}

export const FriendsBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 20%;
  background: white;
  justify-content: flex-start;
  border-left: solid #ded3eb 4px;

  h2 {
    color: #322044;
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 8px;
    align-self: baseline;
    margin-left: 16px;
  }
`;

export const Search = styled.div`
  background-color: #eee6f5;
  width: 240px;
  min-height: 48px;
  border-radius: 24px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: left;
  margin-top: 64px;
  margin-bottom: 0px;

  img {
    height: 28px;
    width: 28px;
    margin-right: 8px;
    margin-left: 8px;
  }
`;
export const SearchResults = styled.div<SearchResultsProps>`
  height: ${(props) => (props.isHigh ? "600px" : "0px")};
  margin-bottom: 64px;
  transition: all 0.3s ease-in-out;
  overflow-x: hidden;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgb(211, 209, 209);
    border-radius: 3px;
  }
`;

export const SearchBar = styled.input`
  color: #787779;
  font-weight: 300;
  font-size: 20px;
  border: None;
  width: 160px;
  background-color: #eee6f5;

  :focus {
    border: none !important;
    outline: 0;
  }
`;

export const FriendsList = styled.div`
  color: #322044;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
  flex-shrink: 2;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgb(211, 209, 209);
    border-radius: 3px;
  }
`;
