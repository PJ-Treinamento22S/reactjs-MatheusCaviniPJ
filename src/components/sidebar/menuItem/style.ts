import styled, {css} from "styled-components";

interface MenuComponentProps{
    isActive?: boolean;
}

export const MenuComponent = styled.div<MenuComponentProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    width: 100%;
    padding-left: 32px;
    h2{
        font-size: 26px;
        font-weight: 300;
        color: black;
        padding-left: 16px;

        ${props => props.isActive &&
        css`
        font-weight: 500;
        color: #7831BE;
        `
        }
    }

    img{
        width: 38px;
        height: 38px;
    }

    :hover{
        cursor: pointer;
    }

`