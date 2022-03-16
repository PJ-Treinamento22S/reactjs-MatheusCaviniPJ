import styled from "styled-components";

interface ModalProps {
  display: string;
}
export const Modal = styled.div<ModalProps>`
  display: ${(props) => props.display}; /* Hidden by default */
  justify-content: center;
  align-items: center;
  position: fixed; /* Stay in place */
  z-index: 3; /* Sit on top */
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.7); /* Black w/ opacity */
`;

export const ModalBox = styled.div`
  width: 40%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  color: #322044;
  border-radius: 24px;
  font-size: 24px;

  button {
    margin-top: 30px;
  }
`;
