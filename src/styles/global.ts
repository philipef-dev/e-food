import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom"


export const GlobalStyle = createGlobalStyle`
    :root {
        --pink: #E66767;
        --white: #FFF;
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

export const BtnDefault = styled(Link)`
        background-color: var(--white);
        color: var(--pink);
        padding: 4px 6px;
        font-size: 14px;
        font-weight: 700;
        font-weight: bold;
        border: none ;
        text-decoration: none;
`