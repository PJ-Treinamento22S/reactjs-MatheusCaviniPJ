import styled from "styled-components";

export const Card = styled.div`
  width: 85%;
  background: #ded3eb;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 4px 0;
`;
export const PhotoAndPiu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const UserAndPiu = styled.div`
  display: flex;
  flex-direction: column;
  width: 82%;
  margin-right: 24px;

  h3 {
    color: #322044;
    font-weight: 400;
    font-size: 20px;
    margin: 4px 0;
    display: flex;
    flex-direction: row;
  }

  p {
    color: #787779;
    padding: 8px 16px;
    font-size: 14px;
  }
`;

export const UserCircle = styled.img`
  height: 64px;
  width: 64px;
  border-radius: 32px;
  background-color: white;
  margin: 8px 8px 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PiuField = styled.div`
  background: white;
  width: 100%;
  border-radius: 12px;
  p {
    color: #787779;
    padding: 8px 16px;
    font-size: 20px;
  }
`;
export const Reactions = styled.div`
  margin: 8px 0px 8px 108px;
  width: 30%;
  display: flex;
  justify-content: space-between;

  img {
    height: 24px;
  }
`;

export const Likes = styled.div`
  display: flex;
  align-items: center;

  p {
    color: #6a5085;
    margin-left: 4px;
    font-size: 16px;
  }
`;
