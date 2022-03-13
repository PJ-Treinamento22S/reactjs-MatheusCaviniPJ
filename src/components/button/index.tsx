import React, { ButtonHTMLAttributes } from 'react';
import { ButtonBox } from './style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    height: number;
    width: number;
    text: string;
}

const Button:React.FC<ButtonProps> = ({height, width, text}) =>{
    return(
        <ButtonBox height={height} width={width} >
            {text}
        </ButtonBox>
    )

} 

export default Button;