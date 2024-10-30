import styled from "styled-components";
import headerImg from '../../assets/images/fundoHeader.png'

export const HeaderHero = styled.header`
    background-image: url(${headerImg});
    width: 100%;
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 64px;
    padding-bottom: 40px;
    
    img {
        display: flex;
        margin: 0 auto;
        margin-bottom: 138px;
    }
`

export const Titulo = styled.h1`
    font-size: 36px;
    color: var(--pink);
    justify-content: center;
    text-align: center;
    margin-bottom: 20px;
`