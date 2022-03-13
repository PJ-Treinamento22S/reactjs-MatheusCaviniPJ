import styled, {css} from "styled-components";

interface ButtonBoxProps{
    height: number;
    width: number;
}

export const ButtonBox = styled.div<ButtonBoxProps>`
    background-color: #7831BE;
    height: ${props => props.height+'px'};
    width: ${props => props.width+'px'};
    color:white;
    font-weight: 600;
    border-radius: ${props => props.height/2+'px'};
    border: none;
    font-size: ${props => props.height*0.85+'px'};
    display: flex ;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s ease-in-out;

    :hover{
        background-color: #322044;
    }
`