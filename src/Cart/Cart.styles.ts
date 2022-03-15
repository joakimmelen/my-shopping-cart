import styled from "styled-components"

export const Wrapper = styled.aside`
    font-family: Arial, Helvetica, sans-serif;
    width: 450px;
    padding: 10px;
    display: grid;


    button {
        color: orange
    }

    .cartTotal {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        padding: 0px 40px 0px 10px;
        position: sticky;
        bottom: 0;
        background-color: white;
        align-items: center;
        border-top: 1px solid orange;
    }
`