import styled, { css } from "styled-components";

export const FriendCard = styled.div`
  background: #eee6f5;
  height: 56px;
  min-height: 56px;
  width: 240px;
  border-radius: 28px;
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 4px 8px;

  .online {
    background: rgb(28, 223, 28);
    height: 10px;
    width: 10px;
    border-radius: 5px;
    position: relative;
    top: -16px;
    left: -10px;
  }
`;

export const UserCircle = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 24px;
  background-color: white;
  margin-left: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserName = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin-left: 4px;
`;
