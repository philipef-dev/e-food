import styled from "styled-components";
import imgCard_1 from '../../assets/images/imgCard-1.png';

export const RestauranteSection = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 80px;
    row-gap: 48px;
    margin-bottom: 120px;
`

export const Card = styled.div`
    border: 1px solid var(--pink);
    width: 472px;  
    font-size: 14px;
    font-weight: bold;
    color: white;

    a {
        display: inline-block;
        background-color: var(--pink);
        padding: 4px 6px;
        color: white;
        text-decoration: none;
    }

    p {
        font-weight: 400;
        color: var(--pink);
        margin-bottom: 16px;
    }
`

export const MainCard = styled.main`
    padding: 8px;
`

export const BackroundImgCard = styled.div`
    background-image: url(${imgCard_1});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: end;
    gap: 8px;
    padding-right: 16px;
    padding-top: 16px;
    padding-bottom: 175px;

    span {
        background-color: var(--pink);
        color: white;
        padding: 4px 6px;
        font-size: 12px;
        font-weight: bold;
    }
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    color: var(--pink);  
    font-size: 18px;
    justify-content: space-between;

    p {
        font-weight: bold;
    }

    div {
        display: flex;
        align-items: flex-start;
        gap: 8px;        
    }

    h3 {
        margin-top: 8px;
        margin-bottom: 16px;
    }
`