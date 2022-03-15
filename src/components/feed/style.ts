import styled from "styled-components";

export const Feed = styled.div`
    height:100%;
    width: 62%;
    background: white;
    overflow-y: scroll;
    margin-right: 4px;
    h2{
        font-size:24px;
    }
    ::-webkit-scrollbar {
    width: 6px;
    }

    ::-webkit-scrollbar-thumb {
    background: rgb(211, 209, 209);
    border-radius: 3px;
    }
`