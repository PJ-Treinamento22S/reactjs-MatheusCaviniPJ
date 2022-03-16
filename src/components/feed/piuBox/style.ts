import styled from "styled-components";


interface CharDependentProps{
    color: string
}

export const PiuBox = styled.div`
    width:85%;
    background: #DED3EB;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 24px 0;
`

export const PhotoAndPiu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

export const UserCircle = styled.img`
    height: 64px;
    width: 64px;
    border-radius: 32px;
    background-color: white;
    margin: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PiuArea = styled.textarea<CharDependentProps>`
    border: none;
    background: white;
    width: 83%;
    min-height: 70%;
    border-radius: 12px;
    margin: 12px 24px 8px 24px;
    font-size: 24px;
    padding-left: 16px;
    padding-top: 4px;
    color: ${props => props.color};
    word-wrap: break-word;
    overflow: visible;
    
    :focus{
    border: none !important;
    outline: 0;
    }
`

export const Features = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 0 8px 64px;

    img{
    height: 28px;
    }
`

export const CharCount = styled.p<CharDependentProps>`
    width: 10%;
    color: ${props => props.color};
`

