import React, { useContext } from "react";
import { DisplayContext } from "../../App";
import Button from "../button";
import * as S from "./style";

interface ModalProps {
  p1: string;
  p2: string;
  buttonText: string;
  display: string;
}

const Modal: React.FC<ModalProps> = ({ p1, p2, buttonText, display }) => {
  const { setDisplay } = useContext(DisplayContext);
  return (
    <S.Modal display={display}>
      <S.ModalBox>
        <p>{p1}</p>
        <p>{p2}</p>
        <Button
          height={32}
          width={120}
          text={buttonText}
          onClick={() => {
            setDisplay(["none", "", ""]);
          }}
        />
      </S.ModalBox>
    </S.Modal>
  );
};

export default Modal;
