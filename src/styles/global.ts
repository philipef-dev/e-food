import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --pink: #E66767;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;      
        font-family: 'Roboto', sans-serif;
        list-style: none;
    }
`

export const Container = styled.div`
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
        padding-top: 80px;
`

export const BntDefault = styled.button`
        background-color: var(--pink);
        color: white;
        padding: 4px 6px;
        font-size: 14px;
        font-weight: bold;
        border: none ;
`