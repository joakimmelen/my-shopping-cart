import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
    border-bottom: 1px solid orange;
    padding-bottom: 10px;
    padding-top: 10px;

    div {
        flex: 1;

    }

    .information, .buttons {
        display: flex;
        justify-content: space-between;

    }

    img {
        max-width: 130px;
        object-fit: contain;
        margin-left: 30px;
        
    }
`