import styled from "styled-components";
import imgCard_1 from '../../assets/images/imgCard-1.png'; 

export const RestauranteSection = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 80px;
    row-gap: 48px;
    margin-bottom: 50px;
`

export const Card = styled.div`
    border: 1px solid var(--pink);
    width: 472px;   
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
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    color: var(--pink);  
    font-weight: bold;
    font-size: 18px;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;
        gap: 8px
    }
`

export const Title = styled.h3`
    font-size: 18px;
    font-weight: bold;
    color: var(--pink);
    margin-top: 8px;
    margin-bottom: 16px;
`

export const Description = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: var(--pink);
    margin-bottom: 16px;
`